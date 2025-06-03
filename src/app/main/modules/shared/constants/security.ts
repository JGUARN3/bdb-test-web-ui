import {
  cipher as forgeCipher,
  md as forgeMd,
  util as forgeUtil,
} from 'node-forge';

export const encrypt = <T>(data: any): string => {
  const cipher = forgeCipher.createCipher('AES-ECB', getHashDevice());
  cipher.start();
  cipher.update(forgeUtil.createBuffer(JSON.stringify(data)));
  cipher.finish();
  return cipher.output.data;
};

const getHashDevice = (): string => {
  const hashBaseDevice = getHashFromDevice();
  const md = forgeMd.sha1.create();
  md.update(hashBaseDevice);
  return md.digest().getBytes(16);
};

const getCanvasProps = (): unknown => {
  return (() => {
    try {
      const canvasVal = document.createElement('canvas');
      const ctx = canvasVal.getContext('2d');
      if (ctx) {
        ctx.textBaseline = 'top';
        ctx.font = "14px 'Arial'";
        ctx.textBaseline = 'alphabetic';
        ctx.fillStyle = '#f60';
        ctx.fillRect(125, 1, 62, 20);
        ctx.fillStyle = '#069';
        ctx.fillText(
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~1!2@3#4$5%6^7&8*9(0)-_=+[{]}|;:',<.>/?",
          2,
          15
        );
        ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
        ctx.fillText(
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~1!2@3#4$5%6^7&8*9(0)-_=+[{]}|;:',<.>/?",
          4,
          17
        );
      }
      return canvasVal.toDataURL();
    } catch (error) {
      return error;
    }
  })();
};

const getHashFromDevice = (): string => {
  const { userAgent, language, languages, hardwareConcurrency } =
    window.navigator;
  const { colorDepth, availWidth, availHeight } = window.screen;
  const timezoneOffset = new Date().getTimezoneOffset();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const touchSupport = 'ontouchstart' in window;
  const canvas = getCanvasProps();

  return JSON.stringify({
    userAgent,
    language,
    languages,
    hardwareConcurrency,
    colorDepth,
    availWidth,
    availHeight,
    timezoneOffset,
    timezone,
    touchSupport,
    canvas,
  });
};
