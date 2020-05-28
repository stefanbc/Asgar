/**
 * @description Utilities clas
 * @export
 * @class Utils
 */
export class Utils {
  /**
   * Creates an instance of Utils.
   * @memberof Utils
   */
  constructor() {}

  /**
   * @description Return the active page name
   * @returns string with the page name
   * @memberof Utils
   */
  getCurrentPageName() {
    return location.pathname.replace(/\//gi, "");
  }

  /**
   * @description Check if the system color scheme is dark
   * @returns boolean
   * @memberof Utils
   */
  checkSystemDarkMode() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }
}
