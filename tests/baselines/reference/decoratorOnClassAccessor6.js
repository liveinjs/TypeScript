//// [decoratorOnClassAccessor6.ts]
declare function dec<T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T>;

class C {
    public @dec set accessor(value: number) { }
}

//// [decoratorOnClassAccessor6.js]
var C = (function () {
    function C() {
    }
    return C;
})();
public;
set;
accessor(value, number);
{ }
