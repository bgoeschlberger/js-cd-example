export class Calculator{
    
    constructor(){
        this._lastResult;
    }
    
    get lastResult(){
        return this._lastResult;
    }

    add(v1, v2){
        this._lastResult = v1+v2;
        return this._lastResult;
    }
}