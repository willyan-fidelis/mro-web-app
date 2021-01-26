export interface ICSSPosition {
    __position?:"relative"|"fixed"|"absolute"; //CSS Custom Properties: --position
    __posUnit?:"%"|"px"; //CSS Custom Properties: --position
    __x?:number; //CSS Custom Properties: --x
    __y?:number; //CSS Custom Properties: --y
  }
export function CSSPosition(__position?:"relative"|"fixed"|"absolute",__unit?:"%" | "px",__x?:number,__y?:number):string | null{
    return `
    ${__position?(
      `
      position: ${__position};
      top: ${__y}${__unit};
      left: ${__x}${__unit};
      `
    ):null};
    `
  }

  export function CSSSize(__size?:boolean,__unit?:"%" | "px",__width?:number,__height?:number):string | null{
    return `
    ${__size?(
      `
      width: ${__width}${__unit};
      height: ${__height}${__unit};
      `
    ):null};
    `
  }