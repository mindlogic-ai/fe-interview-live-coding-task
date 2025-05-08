import { readdirSync, readFileSync, statSync } from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import { join } from 'path';

import {
  PageConfig,
  PageGroupConfig,
  ProductConfig,
  TopicLanguageConfig,
} from '@/types/ProductConfig';

import { getMdxHeadings } from '../app/docs/utils/getMdxHeadings';

export async function getConfigs(): Promise<Record<string, ProductConfig>> {
  try {
    const contentsDirectory = join(process.cwd(), 'src/contents');
    const configs: [string, ProductConfig][] = await Promise.all(
      readdirSync(contentsDirectory).map(async productDir => {
        const productMetadata = JSON.parse(
          readFileSync(
            join(contentsDirectory, productDir, 'metadata.json'),
            'utf8',
          ),
        );
        // The directories inside the productDir are the page groups.
        const pageGroups = readdirSync(
          join(contentsDirectory, productDir),
        ).filter(item =>
          statSync(join(contentsDirectory, productDir, item)).isDirectory(),
        );

        const pageGroupsConfig = await Promise.all(
          pageGroups.map(async pageGroup => {
            // Extract page group metadata from the pageGroup directory if it exists
            const pageGroupMetadataPath = join(
              contentsDirectory,
              productDir,
              pageGroup,
              'metadata.json',
            );
            let pageGroupMetadata = {
              name: { ko: pageGroup, en: pageGroup },
              order: 0,
            };

            try {
              if (statSync(pageGroupMetadataPath).isFile()) {
                pageGroupMetadata = {
                  ...pageGroupMetadata,
                  ...JSON.parse(readFileSync(pageGroupMetadataPath, 'utf8')),
                };
              }
            } catch (error) {
              // If no metadata file exists, use default values
            }

            // The directories inside the pageGroups are the pages.
            const pages = readdirSync(
              join(contentsDirectory, productDir, pageGroup),
            ).filter(item =>
              statSync(
                join(contentsDirectory, productDir, pageGroup, item),
              ).isDirectory(),
            );

            // Read the metadata from the index.mdx files in the en and ko directories in each topic's directory.
            const pageMetadataPromises = pages.map(async page => {
              const enFileContent = readFileSync(
                join(
                  contentsDirectory,
                  productDir,
                  pageGroup,
                  page,
                  'en',
                  'index.mdx',
                ),
                'utf8',
              );
              const koFileContent = readFileSync(
                join(
                  contentsDirectory,
                  productDir,
                  pageGroup,
                  page,
                  'ko',
                  'index.mdx',
                ),
                'utf8',
              );

              // Use next-mdx-remote/serialize to extract frontmatter
              const enData = await serialize(enFileContent, {
                parseFrontmatter: true,
              });
              const koData = await serialize(koFileContent, {
                parseFrontmatter: true,
              });

              // Get the headings from the index.mdx files
              const enHeadings = await getMdxHeadings(enFileContent);
              const koHeadings = await getMdxHeadings(koFileContent);

              // Filter the headings to only include the second level headings
              const enSecondLevelHeadings = enHeadings.headings.filter(
                heading => heading.level === 2,
              );
              const koSecondLevelHeadings = koHeadings.headings.filter(
                heading => heading.level === 2,
              );

              // Construct topic language configs
              const koConfig: TopicLanguageConfig = {
                title: (koData.frontmatter?.title as string) || page,
                description:
                  (koData.frontmatter?.description as string) || page,
                order: koData.frontmatter?.order as number,
                headings: koSecondLevelHeadings,
                lastEditedDate:
                  (koData.frontmatter?.lastEditedDate as string) ||
                  new Date().toISOString(),
                ...(koData.frontmatter?.isFeatured !== undefined && {
                  isFeatured: koData.frontmatter.isFeatured as boolean,
                }),
              };

              const enConfig: TopicLanguageConfig = {
                title: (enData.frontmatter?.title as string) || page,
                description:
                  (enData.frontmatter?.description as string) || page,
                order: enData.frontmatter?.order as number,
                headings: enSecondLevelHeadings,
                lastEditedDate:
                  (enData.frontmatter?.lastEditedDate as string) ||
                  new Date().toISOString(),
                ...(enData.frontmatter?.isFeatured !== undefined && {
                  isFeatured: enData.frontmatter.isFeatured as boolean,
                }),
              };

              return {
                path: `${pageGroup}/${page}`,
                ko: koConfig,
                en: enConfig,
              };
            });

            const pageMetadata = await Promise.all(pageMetadataPromises);
            const sortedPageMetadata = pageMetadata.sort((a, b) => {
              const orderA =
                (a.en.title as any).order !== undefined
                  ? Number((a.en.title as any).order)
                  : 0;
              const orderB =
                (b.en.title as any).order !== undefined
                  ? Number((b.en.title as any).order)
                  : 0;
              return orderA - orderB;
            });

            const pageGroupConfig: PageGroupConfig = {
              path: pageGroup,
              name: pageGroupMetadata.name,
              order: pageGroupMetadata.order,
              pages: sortedPageMetadata as PageConfig[],
            };

            return pageGroupConfig;
          }),
        );

        // Sort page groups by order
        const sortedPageGroups = pageGroupsConfig.sort(
          (a, b) => a.order - b.order,
        );

        return [
          productDir,
          {
            name: productMetadata.name,
            description: productMetadata.description,
            pageGroups: sortedPageGroups,
          },
        ];
      }),
    );

    // Convert the array of entries back to a record
    return Object.fromEntries(configs);
  } catch (error) {
    console.error('Error reading products directory:', error);
    return {};
  }
}
