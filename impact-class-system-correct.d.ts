declare type ReplaceThisParameter<T, This2> = T extends (
  this: infer This,
  ...args: infer Args
) => infer Return
  ? unknown extends This
    ? T
    : (this: This2, ...args: Args) => Return
  : T;

declare type ImpactClassMethodThis<
  K extends keyof Proto,
  Ctor,
  Proto,
  ParentProto
> = K extends keyof ParentProto
  ? Proto & { constructor: Ctor; parent: ParentProto[K] }
  : Proto & { constructor: Ctor };

declare type ImpactClassMember<
  K extends keyof Proto,
  Ctor,
  Proto,
  ParentProto
> = ReplaceThisParameter<
  Proto[K],
  ImpactClassMethodThis<K, Ctor, Proto, ParentProto>
>;

declare type ImpactClassDefinition<Ctor, Proto, ParentProto> = {
  [K in keyof Proto]?: ImpactClassMember<K, Ctor, Proto, ParentProto> | null;
};

declare type ImpactClassPrototype<
  Constructor,
  Instance
> = Constructor extends new (...args: infer Args) => Instance
  ? Instance & { init: (this: Instance, ...args: Args) => void }
  : Instance;

declare interface ImpactClass<Instance> {
  extend<ChildConstructor extends { prototype: unknown }>(
    this: this,
    classDefinition: ImpactClassDefinition<
      ChildConstructor,
      ChildConstructor['prototype'],
      this['prototype']
    >,
  ): ChildConstructor;
  inject(
    this: this,
    classDefinition: ImpactClassDefinition<
      this,
      this['prototype'],
      this['prototype']
    >,
  ): void;

  readonly classId: number;
  readonly prototype: ImpactClassPrototype<this, Instance>;
}
