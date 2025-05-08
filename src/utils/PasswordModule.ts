import nodeForge from 'node-forge';

export const PasswordModule = (myPassword: string) => {
  const key_str = process.env.NEXT_PUBLIC_PRODUCT_KEY?.replace(/\\n/g, '\n');
  const publicKey = nodeForge.pki.publicKeyFromPem(key_str);

  // 비밀번호 암호화
  const password = myPassword;
  const encryptedPassword = publicKey.encrypt(password, 'RSA-OAEP', {
    md: nodeForge.md.sha256.create(),
    mgf1: {
      md: nodeForge.md.sha256.create(),
    },
  });

  return nodeForge.util.encode64(encryptedPassword);
};
