export interface INativeScriptEvent {
  eventName: string
  object?: any
}

export interface IMaybeChildren {
  children?: any[]
}

/* tslint:disable:ban-types */
export type CallbackFunc = Function
/* tslint:enable:ban-types */
