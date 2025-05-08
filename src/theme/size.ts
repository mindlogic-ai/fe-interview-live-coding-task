export const sizes = {
  agentSmSize: '450px',

  //select Agent Box Size
  agentSelectSmWidth: '323px',
  agentSelectSmHeight: '216px',
  agentSelectLgWidth: '360px',
  agentSelectLgHeight: '213px',

  //window Setting
  windowSmBoxSize: '650px',
  windowLgBoxSize: '950px',
  windowFieldSize: '378px',

  //Agent Documentation
  DocumentationLgField: '652px',
  documentationSmField: '460px',
  //Agent Cs
  CsLgField: '647px',
  CsSmField: '457px',
  //chatTest
  chatTestFieldSize: '378px',
};

export type BreakPoints = typeof sizes;
export type BreakPointKeys = keyof typeof sizes;
export type BreakPointValues = (typeof sizes)[BreakPointKeys];
