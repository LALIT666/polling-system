
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model website
 * 
 */
export type website = $Result.DefaultSelection<Prisma.$websitePayload>
/**
 * Model region
 * 
 */
export type region = $Result.DefaultSelection<Prisma.$regionPayload>
/**
 * Model website_tick
 * 
 */
export type website_tick = $Result.DefaultSelection<Prisma.$website_tickPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const website_status: {
  Up: 'Up',
  Down: 'Down',
  Unknown: 'Unknown'
};

export type website_status = (typeof website_status)[keyof typeof website_status]

}

export type website_status = $Enums.website_status

export const website_status: typeof $Enums.website_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.website`: Exposes CRUD operations for the **website** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Websites
    * const websites = await prisma.website.findMany()
    * ```
    */
  get website(): Prisma.websiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.region`: Exposes CRUD operations for the **region** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regions
    * const regions = await prisma.region.findMany()
    * ```
    */
  get region(): Prisma.regionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.website_tick`: Exposes CRUD operations for the **website_tick** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Website_ticks
    * const website_ticks = await prisma.website_tick.findMany()
    * ```
    */
  get website_tick(): Prisma.website_tickDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.3.1
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    website: 'website',
    region: 'region',
    website_tick: 'website_tick'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "website" | "region" | "website_tick"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      website: {
        payload: Prisma.$websitePayload<ExtArgs>
        fields: Prisma.websiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.websiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$websitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.websiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$websitePayload>
          }
          findFirst: {
            args: Prisma.websiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$websitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.websiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$websitePayload>
          }
          findMany: {
            args: Prisma.websiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$websitePayload>[]
          }
          create: {
            args: Prisma.websiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$websitePayload>
          }
          createMany: {
            args: Prisma.websiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.websiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$websitePayload>[]
          }
          delete: {
            args: Prisma.websiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$websitePayload>
          }
          update: {
            args: Prisma.websiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$websitePayload>
          }
          deleteMany: {
            args: Prisma.websiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.websiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.websiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$websitePayload>[]
          }
          upsert: {
            args: Prisma.websiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$websitePayload>
          }
          aggregate: {
            args: Prisma.WebsiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebsite>
          }
          groupBy: {
            args: Prisma.websiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebsiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.websiteCountArgs<ExtArgs>
            result: $Utils.Optional<WebsiteCountAggregateOutputType> | number
          }
        }
      }
      region: {
        payload: Prisma.$regionPayload<ExtArgs>
        fields: Prisma.regionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.regionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.regionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionPayload>
          }
          findFirst: {
            args: Prisma.regionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.regionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionPayload>
          }
          findMany: {
            args: Prisma.regionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionPayload>[]
          }
          create: {
            args: Prisma.regionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionPayload>
          }
          createMany: {
            args: Prisma.regionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.regionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionPayload>[]
          }
          delete: {
            args: Prisma.regionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionPayload>
          }
          update: {
            args: Prisma.regionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionPayload>
          }
          deleteMany: {
            args: Prisma.regionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.regionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.regionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionPayload>[]
          }
          upsert: {
            args: Prisma.regionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionPayload>
          }
          aggregate: {
            args: Prisma.RegionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegion>
          }
          groupBy: {
            args: Prisma.regionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegionGroupByOutputType>[]
          }
          count: {
            args: Prisma.regionCountArgs<ExtArgs>
            result: $Utils.Optional<RegionCountAggregateOutputType> | number
          }
        }
      }
      website_tick: {
        payload: Prisma.$website_tickPayload<ExtArgs>
        fields: Prisma.website_tickFieldRefs
        operations: {
          findUnique: {
            args: Prisma.website_tickFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$website_tickPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.website_tickFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$website_tickPayload>
          }
          findFirst: {
            args: Prisma.website_tickFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$website_tickPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.website_tickFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$website_tickPayload>
          }
          findMany: {
            args: Prisma.website_tickFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$website_tickPayload>[]
          }
          create: {
            args: Prisma.website_tickCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$website_tickPayload>
          }
          createMany: {
            args: Prisma.website_tickCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.website_tickCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$website_tickPayload>[]
          }
          delete: {
            args: Prisma.website_tickDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$website_tickPayload>
          }
          update: {
            args: Prisma.website_tickUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$website_tickPayload>
          }
          deleteMany: {
            args: Prisma.website_tickDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.website_tickUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.website_tickUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$website_tickPayload>[]
          }
          upsert: {
            args: Prisma.website_tickUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$website_tickPayload>
          }
          aggregate: {
            args: Prisma.Website_tickAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebsite_tick>
          }
          groupBy: {
            args: Prisma.website_tickGroupByArgs<ExtArgs>
            result: $Utils.Optional<Website_tickGroupByOutputType>[]
          }
          count: {
            args: Prisma.website_tickCountArgs<ExtArgs>
            result: $Utils.Optional<Website_tickCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    website?: websiteOmit
    region?: regionOmit
    website_tick?: website_tickOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    websites: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    websites?: boolean | UserCountOutputTypeCountWebsitesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWebsitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: websiteWhereInput
  }


  /**
   * Count Type WebsiteCountOutputType
   */

  export type WebsiteCountOutputType = {
    ticks: number
  }

  export type WebsiteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticks?: boolean | WebsiteCountOutputTypeCountTicksArgs
  }

  // Custom InputTypes
  /**
   * WebsiteCountOutputType without action
   */
  export type WebsiteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteCountOutputType
     */
    select?: WebsiteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WebsiteCountOutputType without action
   */
  export type WebsiteCountOutputTypeCountTicksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: website_tickWhereInput
  }


  /**
   * Count Type RegionCountOutputType
   */

  export type RegionCountOutputType = {
    tickes: number
  }

  export type RegionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickes?: boolean | RegionCountOutputTypeCountTickesArgs
  }

  // Custom InputTypes
  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionCountOutputType
     */
    select?: RegionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeCountTickesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: website_tickWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    websites?: boolean | user$websitesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    websites?: boolean | user$websitesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      websites: Prisma.$websitePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    websites<T extends user$websitesArgs<ExtArgs> = {}>(args?: Subset<T, user$websitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$websitePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */ 
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly username: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.websites
   */
  export type user$websitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the website
     */
    select?: websiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the website
     */
    omit?: websiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: websiteInclude<ExtArgs> | null
    where?: websiteWhereInput
    orderBy?: websiteOrderByWithRelationInput | websiteOrderByWithRelationInput[]
    cursor?: websiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebsiteScalarFieldEnum | WebsiteScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model website
   */

  export type AggregateWebsite = {
    _count: WebsiteCountAggregateOutputType | null
    _min: WebsiteMinAggregateOutputType | null
    _max: WebsiteMaxAggregateOutputType | null
  }

  export type WebsiteMinAggregateOutputType = {
    id: string | null
    url: string | null
    user_id: string | null
    time_added: Date | null
  }

  export type WebsiteMaxAggregateOutputType = {
    id: string | null
    url: string | null
    user_id: string | null
    time_added: Date | null
  }

  export type WebsiteCountAggregateOutputType = {
    id: number
    url: number
    user_id: number
    time_added: number
    _all: number
  }


  export type WebsiteMinAggregateInputType = {
    id?: true
    url?: true
    user_id?: true
    time_added?: true
  }

  export type WebsiteMaxAggregateInputType = {
    id?: true
    url?: true
    user_id?: true
    time_added?: true
  }

  export type WebsiteCountAggregateInputType = {
    id?: true
    url?: true
    user_id?: true
    time_added?: true
    _all?: true
  }

  export type WebsiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which website to aggregate.
     */
    where?: websiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of websites to fetch.
     */
    orderBy?: websiteOrderByWithRelationInput | websiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: websiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` websites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned websites
    **/
    _count?: true | WebsiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebsiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebsiteMaxAggregateInputType
  }

  export type GetWebsiteAggregateType<T extends WebsiteAggregateArgs> = {
        [P in keyof T & keyof AggregateWebsite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebsite[P]>
      : GetScalarType<T[P], AggregateWebsite[P]>
  }




  export type websiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: websiteWhereInput
    orderBy?: websiteOrderByWithAggregationInput | websiteOrderByWithAggregationInput[]
    by: WebsiteScalarFieldEnum[] | WebsiteScalarFieldEnum
    having?: websiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebsiteCountAggregateInputType | true
    _min?: WebsiteMinAggregateInputType
    _max?: WebsiteMaxAggregateInputType
  }

  export type WebsiteGroupByOutputType = {
    id: string
    url: string
    user_id: string
    time_added: Date
    _count: WebsiteCountAggregateOutputType | null
    _min: WebsiteMinAggregateOutputType | null
    _max: WebsiteMaxAggregateOutputType | null
  }

  type GetWebsiteGroupByPayload<T extends websiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebsiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebsiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebsiteGroupByOutputType[P]>
            : GetScalarType<T[P], WebsiteGroupByOutputType[P]>
        }
      >
    >


  export type websiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    user_id?: boolean
    time_added?: boolean
    ticks?: boolean | website$ticksArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    _count?: boolean | WebsiteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["website"]>

  export type websiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    user_id?: boolean
    time_added?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["website"]>

  export type websiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    user_id?: boolean
    time_added?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["website"]>

  export type websiteSelectScalar = {
    id?: boolean
    url?: boolean
    user_id?: boolean
    time_added?: boolean
  }

  export type websiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "user_id" | "time_added", ExtArgs["result"]["website"]>
  export type websiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticks?: boolean | website$ticksArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    _count?: boolean | WebsiteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type websiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type websiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $websitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "website"
    objects: {
      ticks: Prisma.$website_tickPayload<ExtArgs>[]
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      user_id: string
      time_added: Date
    }, ExtArgs["result"]["website"]>
    composites: {}
  }

  type websiteGetPayload<S extends boolean | null | undefined | websiteDefaultArgs> = $Result.GetResult<Prisma.$websitePayload, S>

  type websiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<websiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebsiteCountAggregateInputType | true
    }

  export interface websiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['website'], meta: { name: 'website' } }
    /**
     * Find zero or one Website that matches the filter.
     * @param {websiteFindUniqueArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends websiteFindUniqueArgs>(args: SelectSubset<T, websiteFindUniqueArgs<ExtArgs>>): Prisma__websiteClient<$Result.GetResult<Prisma.$websitePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Website that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {websiteFindUniqueOrThrowArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends websiteFindUniqueOrThrowArgs>(args: SelectSubset<T, websiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__websiteClient<$Result.GetResult<Prisma.$websitePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Website that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {websiteFindFirstArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends websiteFindFirstArgs>(args?: SelectSubset<T, websiteFindFirstArgs<ExtArgs>>): Prisma__websiteClient<$Result.GetResult<Prisma.$websitePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Website that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {websiteFindFirstOrThrowArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends websiteFindFirstOrThrowArgs>(args?: SelectSubset<T, websiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__websiteClient<$Result.GetResult<Prisma.$websitePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Websites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {websiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Websites
     * const websites = await prisma.website.findMany()
     * 
     * // Get first 10 Websites
     * const websites = await prisma.website.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const websiteWithIdOnly = await prisma.website.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends websiteFindManyArgs>(args?: SelectSubset<T, websiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$websitePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Website.
     * @param {websiteCreateArgs} args - Arguments to create a Website.
     * @example
     * // Create one Website
     * const Website = await prisma.website.create({
     *   data: {
     *     // ... data to create a Website
     *   }
     * })
     * 
     */
    create<T extends websiteCreateArgs>(args: SelectSubset<T, websiteCreateArgs<ExtArgs>>): Prisma__websiteClient<$Result.GetResult<Prisma.$websitePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Websites.
     * @param {websiteCreateManyArgs} args - Arguments to create many Websites.
     * @example
     * // Create many Websites
     * const website = await prisma.website.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends websiteCreateManyArgs>(args?: SelectSubset<T, websiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Websites and returns the data saved in the database.
     * @param {websiteCreateManyAndReturnArgs} args - Arguments to create many Websites.
     * @example
     * // Create many Websites
     * const website = await prisma.website.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Websites and only return the `id`
     * const websiteWithIdOnly = await prisma.website.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends websiteCreateManyAndReturnArgs>(args?: SelectSubset<T, websiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$websitePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Website.
     * @param {websiteDeleteArgs} args - Arguments to delete one Website.
     * @example
     * // Delete one Website
     * const Website = await prisma.website.delete({
     *   where: {
     *     // ... filter to delete one Website
     *   }
     * })
     * 
     */
    delete<T extends websiteDeleteArgs>(args: SelectSubset<T, websiteDeleteArgs<ExtArgs>>): Prisma__websiteClient<$Result.GetResult<Prisma.$websitePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Website.
     * @param {websiteUpdateArgs} args - Arguments to update one Website.
     * @example
     * // Update one Website
     * const website = await prisma.website.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends websiteUpdateArgs>(args: SelectSubset<T, websiteUpdateArgs<ExtArgs>>): Prisma__websiteClient<$Result.GetResult<Prisma.$websitePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Websites.
     * @param {websiteDeleteManyArgs} args - Arguments to filter Websites to delete.
     * @example
     * // Delete a few Websites
     * const { count } = await prisma.website.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends websiteDeleteManyArgs>(args?: SelectSubset<T, websiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Websites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {websiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Websites
     * const website = await prisma.website.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends websiteUpdateManyArgs>(args: SelectSubset<T, websiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Websites and returns the data updated in the database.
     * @param {websiteUpdateManyAndReturnArgs} args - Arguments to update many Websites.
     * @example
     * // Update many Websites
     * const website = await prisma.website.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Websites and only return the `id`
     * const websiteWithIdOnly = await prisma.website.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends websiteUpdateManyAndReturnArgs>(args: SelectSubset<T, websiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$websitePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Website.
     * @param {websiteUpsertArgs} args - Arguments to update or create a Website.
     * @example
     * // Update or create a Website
     * const website = await prisma.website.upsert({
     *   create: {
     *     // ... data to create a Website
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Website we want to update
     *   }
     * })
     */
    upsert<T extends websiteUpsertArgs>(args: SelectSubset<T, websiteUpsertArgs<ExtArgs>>): Prisma__websiteClient<$Result.GetResult<Prisma.$websitePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Websites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {websiteCountArgs} args - Arguments to filter Websites to count.
     * @example
     * // Count the number of Websites
     * const count = await prisma.website.count({
     *   where: {
     *     // ... the filter for the Websites we want to count
     *   }
     * })
    **/
    count<T extends websiteCountArgs>(
      args?: Subset<T, websiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebsiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Website.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebsiteAggregateArgs>(args: Subset<T, WebsiteAggregateArgs>): Prisma.PrismaPromise<GetWebsiteAggregateType<T>>

    /**
     * Group by Website.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {websiteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends websiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: websiteGroupByArgs['orderBy'] }
        : { orderBy?: websiteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, websiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebsiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the website model
   */
  readonly fields: websiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for website.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__websiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticks<T extends website$ticksArgs<ExtArgs> = {}>(args?: Subset<T, website$ticksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$website_tickPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the website model
   */ 
  interface websiteFieldRefs {
    readonly id: FieldRef<"website", 'String'>
    readonly url: FieldRef<"website", 'String'>
    readonly user_id: FieldRef<"website", 'String'>
    readonly time_added: FieldRef<"website", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * website findUnique
   */
  export type websiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the website
     */
    select?: websiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the website
     */
    omit?: websiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: websiteInclude<ExtArgs> | null
    /**
     * Filter, which website to fetch.
     */
    where: websiteWhereUniqueInput
  }

  /**
   * website findUniqueOrThrow
   */
  export type websiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the website
     */
    select?: websiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the website
     */
    omit?: websiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: websiteInclude<ExtArgs> | null
    /**
     * Filter, which website to fetch.
     */
    where: websiteWhereUniqueInput
  }

  /**
   * website findFirst
   */
  export type websiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the website
     */
    select?: websiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the website
     */
    omit?: websiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: websiteInclude<ExtArgs> | null
    /**
     * Filter, which website to fetch.
     */
    where?: websiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of websites to fetch.
     */
    orderBy?: websiteOrderByWithRelationInput | websiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for websites.
     */
    cursor?: websiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` websites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of websites.
     */
    distinct?: WebsiteScalarFieldEnum | WebsiteScalarFieldEnum[]
  }

  /**
   * website findFirstOrThrow
   */
  export type websiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the website
     */
    select?: websiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the website
     */
    omit?: websiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: websiteInclude<ExtArgs> | null
    /**
     * Filter, which website to fetch.
     */
    where?: websiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of websites to fetch.
     */
    orderBy?: websiteOrderByWithRelationInput | websiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for websites.
     */
    cursor?: websiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` websites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of websites.
     */
    distinct?: WebsiteScalarFieldEnum | WebsiteScalarFieldEnum[]
  }

  /**
   * website findMany
   */
  export type websiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the website
     */
    select?: websiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the website
     */
    omit?: websiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: websiteInclude<ExtArgs> | null
    /**
     * Filter, which websites to fetch.
     */
    where?: websiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of websites to fetch.
     */
    orderBy?: websiteOrderByWithRelationInput | websiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing websites.
     */
    cursor?: websiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` websites.
     */
    skip?: number
    distinct?: WebsiteScalarFieldEnum | WebsiteScalarFieldEnum[]
  }

  /**
   * website create
   */
  export type websiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the website
     */
    select?: websiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the website
     */
    omit?: websiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: websiteInclude<ExtArgs> | null
    /**
     * The data needed to create a website.
     */
    data: XOR<websiteCreateInput, websiteUncheckedCreateInput>
  }

  /**
   * website createMany
   */
  export type websiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many websites.
     */
    data: websiteCreateManyInput | websiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * website createManyAndReturn
   */
  export type websiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the website
     */
    select?: websiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the website
     */
    omit?: websiteOmit<ExtArgs> | null
    /**
     * The data used to create many websites.
     */
    data: websiteCreateManyInput | websiteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: websiteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * website update
   */
  export type websiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the website
     */
    select?: websiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the website
     */
    omit?: websiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: websiteInclude<ExtArgs> | null
    /**
     * The data needed to update a website.
     */
    data: XOR<websiteUpdateInput, websiteUncheckedUpdateInput>
    /**
     * Choose, which website to update.
     */
    where: websiteWhereUniqueInput
  }

  /**
   * website updateMany
   */
  export type websiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update websites.
     */
    data: XOR<websiteUpdateManyMutationInput, websiteUncheckedUpdateManyInput>
    /**
     * Filter which websites to update
     */
    where?: websiteWhereInput
    /**
     * Limit how many websites to update.
     */
    limit?: number
  }

  /**
   * website updateManyAndReturn
   */
  export type websiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the website
     */
    select?: websiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the website
     */
    omit?: websiteOmit<ExtArgs> | null
    /**
     * The data used to update websites.
     */
    data: XOR<websiteUpdateManyMutationInput, websiteUncheckedUpdateManyInput>
    /**
     * Filter which websites to update
     */
    where?: websiteWhereInput
    /**
     * Limit how many websites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: websiteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * website upsert
   */
  export type websiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the website
     */
    select?: websiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the website
     */
    omit?: websiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: websiteInclude<ExtArgs> | null
    /**
     * The filter to search for the website to update in case it exists.
     */
    where: websiteWhereUniqueInput
    /**
     * In case the website found by the `where` argument doesn't exist, create a new website with this data.
     */
    create: XOR<websiteCreateInput, websiteUncheckedCreateInput>
    /**
     * In case the website was found with the provided `where` argument, update it with this data.
     */
    update: XOR<websiteUpdateInput, websiteUncheckedUpdateInput>
  }

  /**
   * website delete
   */
  export type websiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the website
     */
    select?: websiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the website
     */
    omit?: websiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: websiteInclude<ExtArgs> | null
    /**
     * Filter which website to delete.
     */
    where: websiteWhereUniqueInput
  }

  /**
   * website deleteMany
   */
  export type websiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which websites to delete
     */
    where?: websiteWhereInput
    /**
     * Limit how many websites to delete.
     */
    limit?: number
  }

  /**
   * website.ticks
   */
  export type website$ticksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the website_tick
     */
    select?: website_tickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the website_tick
     */
    omit?: website_tickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: website_tickInclude<ExtArgs> | null
    where?: website_tickWhereInput
    orderBy?: website_tickOrderByWithRelationInput | website_tickOrderByWithRelationInput[]
    cursor?: website_tickWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Website_tickScalarFieldEnum | Website_tickScalarFieldEnum[]
  }

  /**
   * website without action
   */
  export type websiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the website
     */
    select?: websiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the website
     */
    omit?: websiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: websiteInclude<ExtArgs> | null
  }


  /**
   * Model region
   */

  export type AggregateRegion = {
    _count: RegionCountAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  export type RegionMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type RegionMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type RegionCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RegionMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RegionMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RegionCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RegionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which region to aggregate.
     */
    where?: regionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regions to fetch.
     */
    orderBy?: regionOrderByWithRelationInput | regionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: regionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned regions
    **/
    _count?: true | RegionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionMaxAggregateInputType
  }

  export type GetRegionAggregateType<T extends RegionAggregateArgs> = {
        [P in keyof T & keyof AggregateRegion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegion[P]>
      : GetScalarType<T[P], AggregateRegion[P]>
  }




  export type regionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: regionWhereInput
    orderBy?: regionOrderByWithAggregationInput | regionOrderByWithAggregationInput[]
    by: RegionScalarFieldEnum[] | RegionScalarFieldEnum
    having?: regionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionCountAggregateInputType | true
    _min?: RegionMinAggregateInputType
    _max?: RegionMaxAggregateInputType
  }

  export type RegionGroupByOutputType = {
    id: string
    name: string
    _count: RegionCountAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  type GetRegionGroupByPayload<T extends regionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionGroupByOutputType[P]>
            : GetScalarType<T[P], RegionGroupByOutputType[P]>
        }
      >
    >


  export type regionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tickes?: boolean | region$tickesArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["region"]>

  export type regionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["region"]>

  export type regionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["region"]>

  export type regionSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type regionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["region"]>
  export type regionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickes?: boolean | region$tickesArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type regionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type regionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $regionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "region"
    objects: {
      tickes: Prisma.$website_tickPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["region"]>
    composites: {}
  }

  type regionGetPayload<S extends boolean | null | undefined | regionDefaultArgs> = $Result.GetResult<Prisma.$regionPayload, S>

  type regionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<regionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegionCountAggregateInputType | true
    }

  export interface regionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['region'], meta: { name: 'region' } }
    /**
     * Find zero or one Region that matches the filter.
     * @param {regionFindUniqueArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends regionFindUniqueArgs>(args: SelectSubset<T, regionFindUniqueArgs<ExtArgs>>): Prisma__regionClient<$Result.GetResult<Prisma.$regionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Region that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {regionFindUniqueOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends regionFindUniqueOrThrowArgs>(args: SelectSubset<T, regionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__regionClient<$Result.GetResult<Prisma.$regionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Region that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regionFindFirstArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends regionFindFirstArgs>(args?: SelectSubset<T, regionFindFirstArgs<ExtArgs>>): Prisma__regionClient<$Result.GetResult<Prisma.$regionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Region that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regionFindFirstOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends regionFindFirstOrThrowArgs>(args?: SelectSubset<T, regionFindFirstOrThrowArgs<ExtArgs>>): Prisma__regionClient<$Result.GetResult<Prisma.$regionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regions
     * const regions = await prisma.region.findMany()
     * 
     * // Get first 10 Regions
     * const regions = await prisma.region.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regionWithIdOnly = await prisma.region.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends regionFindManyArgs>(args?: SelectSubset<T, regionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$regionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Region.
     * @param {regionCreateArgs} args - Arguments to create a Region.
     * @example
     * // Create one Region
     * const Region = await prisma.region.create({
     *   data: {
     *     // ... data to create a Region
     *   }
     * })
     * 
     */
    create<T extends regionCreateArgs>(args: SelectSubset<T, regionCreateArgs<ExtArgs>>): Prisma__regionClient<$Result.GetResult<Prisma.$regionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Regions.
     * @param {regionCreateManyArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends regionCreateManyArgs>(args?: SelectSubset<T, regionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Regions and returns the data saved in the database.
     * @param {regionCreateManyAndReturnArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Regions and only return the `id`
     * const regionWithIdOnly = await prisma.region.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends regionCreateManyAndReturnArgs>(args?: SelectSubset<T, regionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$regionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Region.
     * @param {regionDeleteArgs} args - Arguments to delete one Region.
     * @example
     * // Delete one Region
     * const Region = await prisma.region.delete({
     *   where: {
     *     // ... filter to delete one Region
     *   }
     * })
     * 
     */
    delete<T extends regionDeleteArgs>(args: SelectSubset<T, regionDeleteArgs<ExtArgs>>): Prisma__regionClient<$Result.GetResult<Prisma.$regionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Region.
     * @param {regionUpdateArgs} args - Arguments to update one Region.
     * @example
     * // Update one Region
     * const region = await prisma.region.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends regionUpdateArgs>(args: SelectSubset<T, regionUpdateArgs<ExtArgs>>): Prisma__regionClient<$Result.GetResult<Prisma.$regionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Regions.
     * @param {regionDeleteManyArgs} args - Arguments to filter Regions to delete.
     * @example
     * // Delete a few Regions
     * const { count } = await prisma.region.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends regionDeleteManyArgs>(args?: SelectSubset<T, regionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends regionUpdateManyArgs>(args: SelectSubset<T, regionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions and returns the data updated in the database.
     * @param {regionUpdateManyAndReturnArgs} args - Arguments to update many Regions.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Regions and only return the `id`
     * const regionWithIdOnly = await prisma.region.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends regionUpdateManyAndReturnArgs>(args: SelectSubset<T, regionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$regionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Region.
     * @param {regionUpsertArgs} args - Arguments to update or create a Region.
     * @example
     * // Update or create a Region
     * const region = await prisma.region.upsert({
     *   create: {
     *     // ... data to create a Region
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Region we want to update
     *   }
     * })
     */
    upsert<T extends regionUpsertArgs>(args: SelectSubset<T, regionUpsertArgs<ExtArgs>>): Prisma__regionClient<$Result.GetResult<Prisma.$regionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regionCountArgs} args - Arguments to filter Regions to count.
     * @example
     * // Count the number of Regions
     * const count = await prisma.region.count({
     *   where: {
     *     // ... the filter for the Regions we want to count
     *   }
     * })
    **/
    count<T extends regionCountArgs>(
      args?: Subset<T, regionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegionAggregateArgs>(args: Subset<T, RegionAggregateArgs>): Prisma.PrismaPromise<GetRegionAggregateType<T>>

    /**
     * Group by Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends regionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: regionGroupByArgs['orderBy'] }
        : { orderBy?: regionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, regionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the region model
   */
  readonly fields: regionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for region.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__regionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickes<T extends region$tickesArgs<ExtArgs> = {}>(args?: Subset<T, region$tickesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$website_tickPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the region model
   */ 
  interface regionFieldRefs {
    readonly id: FieldRef<"region", 'String'>
    readonly name: FieldRef<"region", 'String'>
  }
    

  // Custom InputTypes
  /**
   * region findUnique
   */
  export type regionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region
     */
    select?: regionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the region
     */
    omit?: regionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionInclude<ExtArgs> | null
    /**
     * Filter, which region to fetch.
     */
    where: regionWhereUniqueInput
  }

  /**
   * region findUniqueOrThrow
   */
  export type regionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region
     */
    select?: regionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the region
     */
    omit?: regionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionInclude<ExtArgs> | null
    /**
     * Filter, which region to fetch.
     */
    where: regionWhereUniqueInput
  }

  /**
   * region findFirst
   */
  export type regionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region
     */
    select?: regionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the region
     */
    omit?: regionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionInclude<ExtArgs> | null
    /**
     * Filter, which region to fetch.
     */
    where?: regionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regions to fetch.
     */
    orderBy?: regionOrderByWithRelationInput | regionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for regions.
     */
    cursor?: regionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * region findFirstOrThrow
   */
  export type regionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region
     */
    select?: regionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the region
     */
    omit?: regionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionInclude<ExtArgs> | null
    /**
     * Filter, which region to fetch.
     */
    where?: regionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regions to fetch.
     */
    orderBy?: regionOrderByWithRelationInput | regionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for regions.
     */
    cursor?: regionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * region findMany
   */
  export type regionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region
     */
    select?: regionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the region
     */
    omit?: regionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionInclude<ExtArgs> | null
    /**
     * Filter, which regions to fetch.
     */
    where?: regionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regions to fetch.
     */
    orderBy?: regionOrderByWithRelationInput | regionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing regions.
     */
    cursor?: regionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regions.
     */
    skip?: number
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * region create
   */
  export type regionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region
     */
    select?: regionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the region
     */
    omit?: regionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionInclude<ExtArgs> | null
    /**
     * The data needed to create a region.
     */
    data: XOR<regionCreateInput, regionUncheckedCreateInput>
  }

  /**
   * region createMany
   */
  export type regionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many regions.
     */
    data: regionCreateManyInput | regionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * region createManyAndReturn
   */
  export type regionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region
     */
    select?: regionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the region
     */
    omit?: regionOmit<ExtArgs> | null
    /**
     * The data used to create many regions.
     */
    data: regionCreateManyInput | regionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * region update
   */
  export type regionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region
     */
    select?: regionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the region
     */
    omit?: regionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionInclude<ExtArgs> | null
    /**
     * The data needed to update a region.
     */
    data: XOR<regionUpdateInput, regionUncheckedUpdateInput>
    /**
     * Choose, which region to update.
     */
    where: regionWhereUniqueInput
  }

  /**
   * region updateMany
   */
  export type regionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update regions.
     */
    data: XOR<regionUpdateManyMutationInput, regionUncheckedUpdateManyInput>
    /**
     * Filter which regions to update
     */
    where?: regionWhereInput
    /**
     * Limit how many regions to update.
     */
    limit?: number
  }

  /**
   * region updateManyAndReturn
   */
  export type regionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region
     */
    select?: regionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the region
     */
    omit?: regionOmit<ExtArgs> | null
    /**
     * The data used to update regions.
     */
    data: XOR<regionUpdateManyMutationInput, regionUncheckedUpdateManyInput>
    /**
     * Filter which regions to update
     */
    where?: regionWhereInput
    /**
     * Limit how many regions to update.
     */
    limit?: number
  }

  /**
   * region upsert
   */
  export type regionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region
     */
    select?: regionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the region
     */
    omit?: regionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionInclude<ExtArgs> | null
    /**
     * The filter to search for the region to update in case it exists.
     */
    where: regionWhereUniqueInput
    /**
     * In case the region found by the `where` argument doesn't exist, create a new region with this data.
     */
    create: XOR<regionCreateInput, regionUncheckedCreateInput>
    /**
     * In case the region was found with the provided `where` argument, update it with this data.
     */
    update: XOR<regionUpdateInput, regionUncheckedUpdateInput>
  }

  /**
   * region delete
   */
  export type regionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region
     */
    select?: regionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the region
     */
    omit?: regionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionInclude<ExtArgs> | null
    /**
     * Filter which region to delete.
     */
    where: regionWhereUniqueInput
  }

  /**
   * region deleteMany
   */
  export type regionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which regions to delete
     */
    where?: regionWhereInput
    /**
     * Limit how many regions to delete.
     */
    limit?: number
  }

  /**
   * region.tickes
   */
  export type region$tickesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the website_tick
     */
    select?: website_tickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the website_tick
     */
    omit?: website_tickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: website_tickInclude<ExtArgs> | null
    where?: website_tickWhereInput
    orderBy?: website_tickOrderByWithRelationInput | website_tickOrderByWithRelationInput[]
    cursor?: website_tickWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Website_tickScalarFieldEnum | Website_tickScalarFieldEnum[]
  }

  /**
   * region without action
   */
  export type regionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region
     */
    select?: regionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the region
     */
    omit?: regionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionInclude<ExtArgs> | null
  }


  /**
   * Model website_tick
   */

  export type AggregateWebsite_tick = {
    _count: Website_tickCountAggregateOutputType | null
    _avg: Website_tickAvgAggregateOutputType | null
    _sum: Website_tickSumAggregateOutputType | null
    _min: Website_tickMinAggregateOutputType | null
    _max: Website_tickMaxAggregateOutputType | null
  }

  export type Website_tickAvgAggregateOutputType = {
    response_time_ms: number | null
  }

  export type Website_tickSumAggregateOutputType = {
    response_time_ms: number | null
  }

  export type Website_tickMinAggregateOutputType = {
    id: string | null
    response_time_ms: number | null
    status: $Enums.website_status | null
    region_id: string | null
    website_id: string | null
    createdAt: Date | null
  }

  export type Website_tickMaxAggregateOutputType = {
    id: string | null
    response_time_ms: number | null
    status: $Enums.website_status | null
    region_id: string | null
    website_id: string | null
    createdAt: Date | null
  }

  export type Website_tickCountAggregateOutputType = {
    id: number
    response_time_ms: number
    status: number
    region_id: number
    website_id: number
    createdAt: number
    _all: number
  }


  export type Website_tickAvgAggregateInputType = {
    response_time_ms?: true
  }

  export type Website_tickSumAggregateInputType = {
    response_time_ms?: true
  }

  export type Website_tickMinAggregateInputType = {
    id?: true
    response_time_ms?: true
    status?: true
    region_id?: true
    website_id?: true
    createdAt?: true
  }

  export type Website_tickMaxAggregateInputType = {
    id?: true
    response_time_ms?: true
    status?: true
    region_id?: true
    website_id?: true
    createdAt?: true
  }

  export type Website_tickCountAggregateInputType = {
    id?: true
    response_time_ms?: true
    status?: true
    region_id?: true
    website_id?: true
    createdAt?: true
    _all?: true
  }

  export type Website_tickAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which website_tick to aggregate.
     */
    where?: website_tickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of website_ticks to fetch.
     */
    orderBy?: website_tickOrderByWithRelationInput | website_tickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: website_tickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` website_ticks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` website_ticks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned website_ticks
    **/
    _count?: true | Website_tickCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Website_tickAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Website_tickSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Website_tickMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Website_tickMaxAggregateInputType
  }

  export type GetWebsite_tickAggregateType<T extends Website_tickAggregateArgs> = {
        [P in keyof T & keyof AggregateWebsite_tick]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebsite_tick[P]>
      : GetScalarType<T[P], AggregateWebsite_tick[P]>
  }




  export type website_tickGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: website_tickWhereInput
    orderBy?: website_tickOrderByWithAggregationInput | website_tickOrderByWithAggregationInput[]
    by: Website_tickScalarFieldEnum[] | Website_tickScalarFieldEnum
    having?: website_tickScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Website_tickCountAggregateInputType | true
    _avg?: Website_tickAvgAggregateInputType
    _sum?: Website_tickSumAggregateInputType
    _min?: Website_tickMinAggregateInputType
    _max?: Website_tickMaxAggregateInputType
  }

  export type Website_tickGroupByOutputType = {
    id: string
    response_time_ms: number
    status: $Enums.website_status
    region_id: string
    website_id: string
    createdAt: Date
    _count: Website_tickCountAggregateOutputType | null
    _avg: Website_tickAvgAggregateOutputType | null
    _sum: Website_tickSumAggregateOutputType | null
    _min: Website_tickMinAggregateOutputType | null
    _max: Website_tickMaxAggregateOutputType | null
  }

  type GetWebsite_tickGroupByPayload<T extends website_tickGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Website_tickGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Website_tickGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Website_tickGroupByOutputType[P]>
            : GetScalarType<T[P], Website_tickGroupByOutputType[P]>
        }
      >
    >


  export type website_tickSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    response_time_ms?: boolean
    status?: boolean
    region_id?: boolean
    website_id?: boolean
    createdAt?: boolean
    region?: boolean | regionDefaultArgs<ExtArgs>
    website?: boolean | websiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["website_tick"]>

  export type website_tickSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    response_time_ms?: boolean
    status?: boolean
    region_id?: boolean
    website_id?: boolean
    createdAt?: boolean
    region?: boolean | regionDefaultArgs<ExtArgs>
    website?: boolean | websiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["website_tick"]>

  export type website_tickSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    response_time_ms?: boolean
    status?: boolean
    region_id?: boolean
    website_id?: boolean
    createdAt?: boolean
    region?: boolean | regionDefaultArgs<ExtArgs>
    website?: boolean | websiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["website_tick"]>

  export type website_tickSelectScalar = {
    id?: boolean
    response_time_ms?: boolean
    status?: boolean
    region_id?: boolean
    website_id?: boolean
    createdAt?: boolean
  }

  export type website_tickOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "response_time_ms" | "status" | "region_id" | "website_id" | "createdAt", ExtArgs["result"]["website_tick"]>
  export type website_tickInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | regionDefaultArgs<ExtArgs>
    website?: boolean | websiteDefaultArgs<ExtArgs>
  }
  export type website_tickIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | regionDefaultArgs<ExtArgs>
    website?: boolean | websiteDefaultArgs<ExtArgs>
  }
  export type website_tickIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | regionDefaultArgs<ExtArgs>
    website?: boolean | websiteDefaultArgs<ExtArgs>
  }

  export type $website_tickPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "website_tick"
    objects: {
      region: Prisma.$regionPayload<ExtArgs>
      website: Prisma.$websitePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      response_time_ms: number
      status: $Enums.website_status
      region_id: string
      website_id: string
      createdAt: Date
    }, ExtArgs["result"]["website_tick"]>
    composites: {}
  }

  type website_tickGetPayload<S extends boolean | null | undefined | website_tickDefaultArgs> = $Result.GetResult<Prisma.$website_tickPayload, S>

  type website_tickCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<website_tickFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Website_tickCountAggregateInputType | true
    }

  export interface website_tickDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['website_tick'], meta: { name: 'website_tick' } }
    /**
     * Find zero or one Website_tick that matches the filter.
     * @param {website_tickFindUniqueArgs} args - Arguments to find a Website_tick
     * @example
     * // Get one Website_tick
     * const website_tick = await prisma.website_tick.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends website_tickFindUniqueArgs>(args: SelectSubset<T, website_tickFindUniqueArgs<ExtArgs>>): Prisma__website_tickClient<$Result.GetResult<Prisma.$website_tickPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Website_tick that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {website_tickFindUniqueOrThrowArgs} args - Arguments to find a Website_tick
     * @example
     * // Get one Website_tick
     * const website_tick = await prisma.website_tick.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends website_tickFindUniqueOrThrowArgs>(args: SelectSubset<T, website_tickFindUniqueOrThrowArgs<ExtArgs>>): Prisma__website_tickClient<$Result.GetResult<Prisma.$website_tickPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Website_tick that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {website_tickFindFirstArgs} args - Arguments to find a Website_tick
     * @example
     * // Get one Website_tick
     * const website_tick = await prisma.website_tick.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends website_tickFindFirstArgs>(args?: SelectSubset<T, website_tickFindFirstArgs<ExtArgs>>): Prisma__website_tickClient<$Result.GetResult<Prisma.$website_tickPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Website_tick that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {website_tickFindFirstOrThrowArgs} args - Arguments to find a Website_tick
     * @example
     * // Get one Website_tick
     * const website_tick = await prisma.website_tick.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends website_tickFindFirstOrThrowArgs>(args?: SelectSubset<T, website_tickFindFirstOrThrowArgs<ExtArgs>>): Prisma__website_tickClient<$Result.GetResult<Prisma.$website_tickPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Website_ticks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {website_tickFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Website_ticks
     * const website_ticks = await prisma.website_tick.findMany()
     * 
     * // Get first 10 Website_ticks
     * const website_ticks = await prisma.website_tick.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const website_tickWithIdOnly = await prisma.website_tick.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends website_tickFindManyArgs>(args?: SelectSubset<T, website_tickFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$website_tickPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Website_tick.
     * @param {website_tickCreateArgs} args - Arguments to create a Website_tick.
     * @example
     * // Create one Website_tick
     * const Website_tick = await prisma.website_tick.create({
     *   data: {
     *     // ... data to create a Website_tick
     *   }
     * })
     * 
     */
    create<T extends website_tickCreateArgs>(args: SelectSubset<T, website_tickCreateArgs<ExtArgs>>): Prisma__website_tickClient<$Result.GetResult<Prisma.$website_tickPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Website_ticks.
     * @param {website_tickCreateManyArgs} args - Arguments to create many Website_ticks.
     * @example
     * // Create many Website_ticks
     * const website_tick = await prisma.website_tick.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends website_tickCreateManyArgs>(args?: SelectSubset<T, website_tickCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Website_ticks and returns the data saved in the database.
     * @param {website_tickCreateManyAndReturnArgs} args - Arguments to create many Website_ticks.
     * @example
     * // Create many Website_ticks
     * const website_tick = await prisma.website_tick.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Website_ticks and only return the `id`
     * const website_tickWithIdOnly = await prisma.website_tick.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends website_tickCreateManyAndReturnArgs>(args?: SelectSubset<T, website_tickCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$website_tickPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Website_tick.
     * @param {website_tickDeleteArgs} args - Arguments to delete one Website_tick.
     * @example
     * // Delete one Website_tick
     * const Website_tick = await prisma.website_tick.delete({
     *   where: {
     *     // ... filter to delete one Website_tick
     *   }
     * })
     * 
     */
    delete<T extends website_tickDeleteArgs>(args: SelectSubset<T, website_tickDeleteArgs<ExtArgs>>): Prisma__website_tickClient<$Result.GetResult<Prisma.$website_tickPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Website_tick.
     * @param {website_tickUpdateArgs} args - Arguments to update one Website_tick.
     * @example
     * // Update one Website_tick
     * const website_tick = await prisma.website_tick.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends website_tickUpdateArgs>(args: SelectSubset<T, website_tickUpdateArgs<ExtArgs>>): Prisma__website_tickClient<$Result.GetResult<Prisma.$website_tickPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Website_ticks.
     * @param {website_tickDeleteManyArgs} args - Arguments to filter Website_ticks to delete.
     * @example
     * // Delete a few Website_ticks
     * const { count } = await prisma.website_tick.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends website_tickDeleteManyArgs>(args?: SelectSubset<T, website_tickDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Website_ticks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {website_tickUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Website_ticks
     * const website_tick = await prisma.website_tick.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends website_tickUpdateManyArgs>(args: SelectSubset<T, website_tickUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Website_ticks and returns the data updated in the database.
     * @param {website_tickUpdateManyAndReturnArgs} args - Arguments to update many Website_ticks.
     * @example
     * // Update many Website_ticks
     * const website_tick = await prisma.website_tick.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Website_ticks and only return the `id`
     * const website_tickWithIdOnly = await prisma.website_tick.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends website_tickUpdateManyAndReturnArgs>(args: SelectSubset<T, website_tickUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$website_tickPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Website_tick.
     * @param {website_tickUpsertArgs} args - Arguments to update or create a Website_tick.
     * @example
     * // Update or create a Website_tick
     * const website_tick = await prisma.website_tick.upsert({
     *   create: {
     *     // ... data to create a Website_tick
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Website_tick we want to update
     *   }
     * })
     */
    upsert<T extends website_tickUpsertArgs>(args: SelectSubset<T, website_tickUpsertArgs<ExtArgs>>): Prisma__website_tickClient<$Result.GetResult<Prisma.$website_tickPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Website_ticks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {website_tickCountArgs} args - Arguments to filter Website_ticks to count.
     * @example
     * // Count the number of Website_ticks
     * const count = await prisma.website_tick.count({
     *   where: {
     *     // ... the filter for the Website_ticks we want to count
     *   }
     * })
    **/
    count<T extends website_tickCountArgs>(
      args?: Subset<T, website_tickCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Website_tickCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Website_tick.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Website_tickAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Website_tickAggregateArgs>(args: Subset<T, Website_tickAggregateArgs>): Prisma.PrismaPromise<GetWebsite_tickAggregateType<T>>

    /**
     * Group by Website_tick.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {website_tickGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends website_tickGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: website_tickGroupByArgs['orderBy'] }
        : { orderBy?: website_tickGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, website_tickGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebsite_tickGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the website_tick model
   */
  readonly fields: website_tickFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for website_tick.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__website_tickClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    region<T extends regionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, regionDefaultArgs<ExtArgs>>): Prisma__regionClient<$Result.GetResult<Prisma.$regionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    website<T extends websiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, websiteDefaultArgs<ExtArgs>>): Prisma__websiteClient<$Result.GetResult<Prisma.$websitePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the website_tick model
   */ 
  interface website_tickFieldRefs {
    readonly id: FieldRef<"website_tick", 'String'>
    readonly response_time_ms: FieldRef<"website_tick", 'Int'>
    readonly status: FieldRef<"website_tick", 'website_status'>
    readonly region_id: FieldRef<"website_tick", 'String'>
    readonly website_id: FieldRef<"website_tick", 'String'>
    readonly createdAt: FieldRef<"website_tick", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * website_tick findUnique
   */
  export type website_tickFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the website_tick
     */
    select?: website_tickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the website_tick
     */
    omit?: website_tickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: website_tickInclude<ExtArgs> | null
    /**
     * Filter, which website_tick to fetch.
     */
    where: website_tickWhereUniqueInput
  }

  /**
   * website_tick findUniqueOrThrow
   */
  export type website_tickFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the website_tick
     */
    select?: website_tickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the website_tick
     */
    omit?: website_tickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: website_tickInclude<ExtArgs> | null
    /**
     * Filter, which website_tick to fetch.
     */
    where: website_tickWhereUniqueInput
  }

  /**
   * website_tick findFirst
   */
  export type website_tickFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the website_tick
     */
    select?: website_tickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the website_tick
     */
    omit?: website_tickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: website_tickInclude<ExtArgs> | null
    /**
     * Filter, which website_tick to fetch.
     */
    where?: website_tickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of website_ticks to fetch.
     */
    orderBy?: website_tickOrderByWithRelationInput | website_tickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for website_ticks.
     */
    cursor?: website_tickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` website_ticks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` website_ticks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of website_ticks.
     */
    distinct?: Website_tickScalarFieldEnum | Website_tickScalarFieldEnum[]
  }

  /**
   * website_tick findFirstOrThrow
   */
  export type website_tickFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the website_tick
     */
    select?: website_tickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the website_tick
     */
    omit?: website_tickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: website_tickInclude<ExtArgs> | null
    /**
     * Filter, which website_tick to fetch.
     */
    where?: website_tickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of website_ticks to fetch.
     */
    orderBy?: website_tickOrderByWithRelationInput | website_tickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for website_ticks.
     */
    cursor?: website_tickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` website_ticks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` website_ticks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of website_ticks.
     */
    distinct?: Website_tickScalarFieldEnum | Website_tickScalarFieldEnum[]
  }

  /**
   * website_tick findMany
   */
  export type website_tickFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the website_tick
     */
    select?: website_tickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the website_tick
     */
    omit?: website_tickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: website_tickInclude<ExtArgs> | null
    /**
     * Filter, which website_ticks to fetch.
     */
    where?: website_tickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of website_ticks to fetch.
     */
    orderBy?: website_tickOrderByWithRelationInput | website_tickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing website_ticks.
     */
    cursor?: website_tickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` website_ticks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` website_ticks.
     */
    skip?: number
    distinct?: Website_tickScalarFieldEnum | Website_tickScalarFieldEnum[]
  }

  /**
   * website_tick create
   */
  export type website_tickCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the website_tick
     */
    select?: website_tickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the website_tick
     */
    omit?: website_tickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: website_tickInclude<ExtArgs> | null
    /**
     * The data needed to create a website_tick.
     */
    data: XOR<website_tickCreateInput, website_tickUncheckedCreateInput>
  }

  /**
   * website_tick createMany
   */
  export type website_tickCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many website_ticks.
     */
    data: website_tickCreateManyInput | website_tickCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * website_tick createManyAndReturn
   */
  export type website_tickCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the website_tick
     */
    select?: website_tickSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the website_tick
     */
    omit?: website_tickOmit<ExtArgs> | null
    /**
     * The data used to create many website_ticks.
     */
    data: website_tickCreateManyInput | website_tickCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: website_tickIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * website_tick update
   */
  export type website_tickUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the website_tick
     */
    select?: website_tickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the website_tick
     */
    omit?: website_tickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: website_tickInclude<ExtArgs> | null
    /**
     * The data needed to update a website_tick.
     */
    data: XOR<website_tickUpdateInput, website_tickUncheckedUpdateInput>
    /**
     * Choose, which website_tick to update.
     */
    where: website_tickWhereUniqueInput
  }

  /**
   * website_tick updateMany
   */
  export type website_tickUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update website_ticks.
     */
    data: XOR<website_tickUpdateManyMutationInput, website_tickUncheckedUpdateManyInput>
    /**
     * Filter which website_ticks to update
     */
    where?: website_tickWhereInput
    /**
     * Limit how many website_ticks to update.
     */
    limit?: number
  }

  /**
   * website_tick updateManyAndReturn
   */
  export type website_tickUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the website_tick
     */
    select?: website_tickSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the website_tick
     */
    omit?: website_tickOmit<ExtArgs> | null
    /**
     * The data used to update website_ticks.
     */
    data: XOR<website_tickUpdateManyMutationInput, website_tickUncheckedUpdateManyInput>
    /**
     * Filter which website_ticks to update
     */
    where?: website_tickWhereInput
    /**
     * Limit how many website_ticks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: website_tickIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * website_tick upsert
   */
  export type website_tickUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the website_tick
     */
    select?: website_tickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the website_tick
     */
    omit?: website_tickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: website_tickInclude<ExtArgs> | null
    /**
     * The filter to search for the website_tick to update in case it exists.
     */
    where: website_tickWhereUniqueInput
    /**
     * In case the website_tick found by the `where` argument doesn't exist, create a new website_tick with this data.
     */
    create: XOR<website_tickCreateInput, website_tickUncheckedCreateInput>
    /**
     * In case the website_tick was found with the provided `where` argument, update it with this data.
     */
    update: XOR<website_tickUpdateInput, website_tickUncheckedUpdateInput>
  }

  /**
   * website_tick delete
   */
  export type website_tickDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the website_tick
     */
    select?: website_tickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the website_tick
     */
    omit?: website_tickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: website_tickInclude<ExtArgs> | null
    /**
     * Filter which website_tick to delete.
     */
    where: website_tickWhereUniqueInput
  }

  /**
   * website_tick deleteMany
   */
  export type website_tickDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which website_ticks to delete
     */
    where?: website_tickWhereInput
    /**
     * Limit how many website_ticks to delete.
     */
    limit?: number
  }

  /**
   * website_tick without action
   */
  export type website_tickDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the website_tick
     */
    select?: website_tickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the website_tick
     */
    omit?: website_tickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: website_tickInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WebsiteScalarFieldEnum: {
    id: 'id',
    url: 'url',
    user_id: 'user_id',
    time_added: 'time_added'
  };

  export type WebsiteScalarFieldEnum = (typeof WebsiteScalarFieldEnum)[keyof typeof WebsiteScalarFieldEnum]


  export const RegionScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RegionScalarFieldEnum = (typeof RegionScalarFieldEnum)[keyof typeof RegionScalarFieldEnum]


  export const Website_tickScalarFieldEnum: {
    id: 'id',
    response_time_ms: 'response_time_ms',
    status: 'status',
    region_id: 'region_id',
    website_id: 'website_id',
    createdAt: 'createdAt'
  };

  export type Website_tickScalarFieldEnum = (typeof Website_tickScalarFieldEnum)[keyof typeof Website_tickScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'website_status'
   */
  export type Enumwebsite_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'website_status'>
    


  /**
   * Reference to a field of type 'website_status[]'
   */
  export type ListEnumwebsite_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'website_status[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    username?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    websites?: WebsiteListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    websites?: websiteOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringFilter<"user"> | string
    websites?: WebsiteListRelationFilter
  }, "id" | "username">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    username?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
  }

  export type websiteWhereInput = {
    AND?: websiteWhereInput | websiteWhereInput[]
    OR?: websiteWhereInput[]
    NOT?: websiteWhereInput | websiteWhereInput[]
    id?: StringFilter<"website"> | string
    url?: StringFilter<"website"> | string
    user_id?: StringFilter<"website"> | string
    time_added?: DateTimeFilter<"website"> | Date | string
    ticks?: Website_tickListRelationFilter
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type websiteOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    user_id?: SortOrder
    time_added?: SortOrder
    ticks?: website_tickOrderByRelationAggregateInput
    user?: userOrderByWithRelationInput
  }

  export type websiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: websiteWhereInput | websiteWhereInput[]
    OR?: websiteWhereInput[]
    NOT?: websiteWhereInput | websiteWhereInput[]
    url?: StringFilter<"website"> | string
    user_id?: StringFilter<"website"> | string
    time_added?: DateTimeFilter<"website"> | Date | string
    ticks?: Website_tickListRelationFilter
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type websiteOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    user_id?: SortOrder
    time_added?: SortOrder
    _count?: websiteCountOrderByAggregateInput
    _max?: websiteMaxOrderByAggregateInput
    _min?: websiteMinOrderByAggregateInput
  }

  export type websiteScalarWhereWithAggregatesInput = {
    AND?: websiteScalarWhereWithAggregatesInput | websiteScalarWhereWithAggregatesInput[]
    OR?: websiteScalarWhereWithAggregatesInput[]
    NOT?: websiteScalarWhereWithAggregatesInput | websiteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"website"> | string
    url?: StringWithAggregatesFilter<"website"> | string
    user_id?: StringWithAggregatesFilter<"website"> | string
    time_added?: DateTimeWithAggregatesFilter<"website"> | Date | string
  }

  export type regionWhereInput = {
    AND?: regionWhereInput | regionWhereInput[]
    OR?: regionWhereInput[]
    NOT?: regionWhereInput | regionWhereInput[]
    id?: StringFilter<"region"> | string
    name?: StringFilter<"region"> | string
    tickes?: Website_tickListRelationFilter
  }

  export type regionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tickes?: website_tickOrderByRelationAggregateInput
  }

  export type regionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: regionWhereInput | regionWhereInput[]
    OR?: regionWhereInput[]
    NOT?: regionWhereInput | regionWhereInput[]
    name?: StringFilter<"region"> | string
    tickes?: Website_tickListRelationFilter
  }, "id">

  export type regionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: regionCountOrderByAggregateInput
    _max?: regionMaxOrderByAggregateInput
    _min?: regionMinOrderByAggregateInput
  }

  export type regionScalarWhereWithAggregatesInput = {
    AND?: regionScalarWhereWithAggregatesInput | regionScalarWhereWithAggregatesInput[]
    OR?: regionScalarWhereWithAggregatesInput[]
    NOT?: regionScalarWhereWithAggregatesInput | regionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"region"> | string
    name?: StringWithAggregatesFilter<"region"> | string
  }

  export type website_tickWhereInput = {
    AND?: website_tickWhereInput | website_tickWhereInput[]
    OR?: website_tickWhereInput[]
    NOT?: website_tickWhereInput | website_tickWhereInput[]
    id?: StringFilter<"website_tick"> | string
    response_time_ms?: IntFilter<"website_tick"> | number
    status?: Enumwebsite_statusFilter<"website_tick"> | $Enums.website_status
    region_id?: StringFilter<"website_tick"> | string
    website_id?: StringFilter<"website_tick"> | string
    createdAt?: DateTimeFilter<"website_tick"> | Date | string
    region?: XOR<RegionScalarRelationFilter, regionWhereInput>
    website?: XOR<WebsiteScalarRelationFilter, websiteWhereInput>
  }

  export type website_tickOrderByWithRelationInput = {
    id?: SortOrder
    response_time_ms?: SortOrder
    status?: SortOrder
    region_id?: SortOrder
    website_id?: SortOrder
    createdAt?: SortOrder
    region?: regionOrderByWithRelationInput
    website?: websiteOrderByWithRelationInput
  }

  export type website_tickWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: website_tickWhereInput | website_tickWhereInput[]
    OR?: website_tickWhereInput[]
    NOT?: website_tickWhereInput | website_tickWhereInput[]
    response_time_ms?: IntFilter<"website_tick"> | number
    status?: Enumwebsite_statusFilter<"website_tick"> | $Enums.website_status
    region_id?: StringFilter<"website_tick"> | string
    website_id?: StringFilter<"website_tick"> | string
    createdAt?: DateTimeFilter<"website_tick"> | Date | string
    region?: XOR<RegionScalarRelationFilter, regionWhereInput>
    website?: XOR<WebsiteScalarRelationFilter, websiteWhereInput>
  }, "id">

  export type website_tickOrderByWithAggregationInput = {
    id?: SortOrder
    response_time_ms?: SortOrder
    status?: SortOrder
    region_id?: SortOrder
    website_id?: SortOrder
    createdAt?: SortOrder
    _count?: website_tickCountOrderByAggregateInput
    _avg?: website_tickAvgOrderByAggregateInput
    _max?: website_tickMaxOrderByAggregateInput
    _min?: website_tickMinOrderByAggregateInput
    _sum?: website_tickSumOrderByAggregateInput
  }

  export type website_tickScalarWhereWithAggregatesInput = {
    AND?: website_tickScalarWhereWithAggregatesInput | website_tickScalarWhereWithAggregatesInput[]
    OR?: website_tickScalarWhereWithAggregatesInput[]
    NOT?: website_tickScalarWhereWithAggregatesInput | website_tickScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"website_tick"> | string
    response_time_ms?: IntWithAggregatesFilter<"website_tick"> | number
    status?: Enumwebsite_statusWithAggregatesFilter<"website_tick"> | $Enums.website_status
    region_id?: StringWithAggregatesFilter<"website_tick"> | string
    website_id?: StringWithAggregatesFilter<"website_tick"> | string
    createdAt?: DateTimeWithAggregatesFilter<"website_tick"> | Date | string
  }

  export type userCreateInput = {
    id?: string
    username: string
    password: string
    websites?: websiteCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    websites?: websiteUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    websites?: websiteUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    websites?: websiteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    username: string
    password: string
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type websiteCreateInput = {
    id?: string
    url: string
    time_added: Date | string
    ticks?: website_tickCreateNestedManyWithoutWebsiteInput
    user: userCreateNestedOneWithoutWebsitesInput
  }

  export type websiteUncheckedCreateInput = {
    id?: string
    url: string
    user_id: string
    time_added: Date | string
    ticks?: website_tickUncheckedCreateNestedManyWithoutWebsiteInput
  }

  export type websiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    time_added?: DateTimeFieldUpdateOperationsInput | Date | string
    ticks?: website_tickUpdateManyWithoutWebsiteNestedInput
    user?: userUpdateOneRequiredWithoutWebsitesNestedInput
  }

  export type websiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    time_added?: DateTimeFieldUpdateOperationsInput | Date | string
    ticks?: website_tickUncheckedUpdateManyWithoutWebsiteNestedInput
  }

  export type websiteCreateManyInput = {
    id?: string
    url: string
    user_id: string
    time_added: Date | string
  }

  export type websiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    time_added?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type websiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    time_added?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type regionCreateInput = {
    id?: string
    name: string
    tickes?: website_tickCreateNestedManyWithoutRegionInput
  }

  export type regionUncheckedCreateInput = {
    id?: string
    name: string
    tickes?: website_tickUncheckedCreateNestedManyWithoutRegionInput
  }

  export type regionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tickes?: website_tickUpdateManyWithoutRegionNestedInput
  }

  export type regionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tickes?: website_tickUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type regionCreateManyInput = {
    id?: string
    name: string
  }

  export type regionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type regionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type website_tickCreateInput = {
    id?: string
    response_time_ms: number
    status: $Enums.website_status
    createdAt?: Date | string
    region: regionCreateNestedOneWithoutTickesInput
    website: websiteCreateNestedOneWithoutTicksInput
  }

  export type website_tickUncheckedCreateInput = {
    id?: string
    response_time_ms: number
    status: $Enums.website_status
    region_id: string
    website_id: string
    createdAt?: Date | string
  }

  export type website_tickUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: Enumwebsite_statusFieldUpdateOperationsInput | $Enums.website_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: regionUpdateOneRequiredWithoutTickesNestedInput
    website?: websiteUpdateOneRequiredWithoutTicksNestedInput
  }

  export type website_tickUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: Enumwebsite_statusFieldUpdateOperationsInput | $Enums.website_status
    region_id?: StringFieldUpdateOperationsInput | string
    website_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type website_tickCreateManyInput = {
    id?: string
    response_time_ms: number
    status: $Enums.website_status
    region_id: string
    website_id: string
    createdAt?: Date | string
  }

  export type website_tickUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: Enumwebsite_statusFieldUpdateOperationsInput | $Enums.website_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type website_tickUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: Enumwebsite_statusFieldUpdateOperationsInput | $Enums.website_status
    region_id?: StringFieldUpdateOperationsInput | string
    website_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type WebsiteListRelationFilter = {
    every?: websiteWhereInput
    some?: websiteWhereInput
    none?: websiteWhereInput
  }

  export type websiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Website_tickListRelationFilter = {
    every?: website_tickWhereInput
    some?: website_tickWhereInput
    none?: website_tickWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type website_tickOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type websiteCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    user_id?: SortOrder
    time_added?: SortOrder
  }

  export type websiteMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    user_id?: SortOrder
    time_added?: SortOrder
  }

  export type websiteMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    user_id?: SortOrder
    time_added?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type regionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type regionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type regionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type Enumwebsite_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.website_status | Enumwebsite_statusFieldRefInput<$PrismaModel>
    in?: $Enums.website_status[] | ListEnumwebsite_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.website_status[] | ListEnumwebsite_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumwebsite_statusFilter<$PrismaModel> | $Enums.website_status
  }

  export type RegionScalarRelationFilter = {
    is?: regionWhereInput
    isNot?: regionWhereInput
  }

  export type WebsiteScalarRelationFilter = {
    is?: websiteWhereInput
    isNot?: websiteWhereInput
  }

  export type website_tickCountOrderByAggregateInput = {
    id?: SortOrder
    response_time_ms?: SortOrder
    status?: SortOrder
    region_id?: SortOrder
    website_id?: SortOrder
    createdAt?: SortOrder
  }

  export type website_tickAvgOrderByAggregateInput = {
    response_time_ms?: SortOrder
  }

  export type website_tickMaxOrderByAggregateInput = {
    id?: SortOrder
    response_time_ms?: SortOrder
    status?: SortOrder
    region_id?: SortOrder
    website_id?: SortOrder
    createdAt?: SortOrder
  }

  export type website_tickMinOrderByAggregateInput = {
    id?: SortOrder
    response_time_ms?: SortOrder
    status?: SortOrder
    region_id?: SortOrder
    website_id?: SortOrder
    createdAt?: SortOrder
  }

  export type website_tickSumOrderByAggregateInput = {
    response_time_ms?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type Enumwebsite_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.website_status | Enumwebsite_statusFieldRefInput<$PrismaModel>
    in?: $Enums.website_status[] | ListEnumwebsite_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.website_status[] | ListEnumwebsite_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumwebsite_statusWithAggregatesFilter<$PrismaModel> | $Enums.website_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumwebsite_statusFilter<$PrismaModel>
    _max?: NestedEnumwebsite_statusFilter<$PrismaModel>
  }

  export type websiteCreateNestedManyWithoutUserInput = {
    create?: XOR<websiteCreateWithoutUserInput, websiteUncheckedCreateWithoutUserInput> | websiteCreateWithoutUserInput[] | websiteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: websiteCreateOrConnectWithoutUserInput | websiteCreateOrConnectWithoutUserInput[]
    createMany?: websiteCreateManyUserInputEnvelope
    connect?: websiteWhereUniqueInput | websiteWhereUniqueInput[]
  }

  export type websiteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<websiteCreateWithoutUserInput, websiteUncheckedCreateWithoutUserInput> | websiteCreateWithoutUserInput[] | websiteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: websiteCreateOrConnectWithoutUserInput | websiteCreateOrConnectWithoutUserInput[]
    createMany?: websiteCreateManyUserInputEnvelope
    connect?: websiteWhereUniqueInput | websiteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type websiteUpdateManyWithoutUserNestedInput = {
    create?: XOR<websiteCreateWithoutUserInput, websiteUncheckedCreateWithoutUserInput> | websiteCreateWithoutUserInput[] | websiteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: websiteCreateOrConnectWithoutUserInput | websiteCreateOrConnectWithoutUserInput[]
    upsert?: websiteUpsertWithWhereUniqueWithoutUserInput | websiteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: websiteCreateManyUserInputEnvelope
    set?: websiteWhereUniqueInput | websiteWhereUniqueInput[]
    disconnect?: websiteWhereUniqueInput | websiteWhereUniqueInput[]
    delete?: websiteWhereUniqueInput | websiteWhereUniqueInput[]
    connect?: websiteWhereUniqueInput | websiteWhereUniqueInput[]
    update?: websiteUpdateWithWhereUniqueWithoutUserInput | websiteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: websiteUpdateManyWithWhereWithoutUserInput | websiteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: websiteScalarWhereInput | websiteScalarWhereInput[]
  }

  export type websiteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<websiteCreateWithoutUserInput, websiteUncheckedCreateWithoutUserInput> | websiteCreateWithoutUserInput[] | websiteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: websiteCreateOrConnectWithoutUserInput | websiteCreateOrConnectWithoutUserInput[]
    upsert?: websiteUpsertWithWhereUniqueWithoutUserInput | websiteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: websiteCreateManyUserInputEnvelope
    set?: websiteWhereUniqueInput | websiteWhereUniqueInput[]
    disconnect?: websiteWhereUniqueInput | websiteWhereUniqueInput[]
    delete?: websiteWhereUniqueInput | websiteWhereUniqueInput[]
    connect?: websiteWhereUniqueInput | websiteWhereUniqueInput[]
    update?: websiteUpdateWithWhereUniqueWithoutUserInput | websiteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: websiteUpdateManyWithWhereWithoutUserInput | websiteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: websiteScalarWhereInput | websiteScalarWhereInput[]
  }

  export type website_tickCreateNestedManyWithoutWebsiteInput = {
    create?: XOR<website_tickCreateWithoutWebsiteInput, website_tickUncheckedCreateWithoutWebsiteInput> | website_tickCreateWithoutWebsiteInput[] | website_tickUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: website_tickCreateOrConnectWithoutWebsiteInput | website_tickCreateOrConnectWithoutWebsiteInput[]
    createMany?: website_tickCreateManyWebsiteInputEnvelope
    connect?: website_tickWhereUniqueInput | website_tickWhereUniqueInput[]
  }

  export type userCreateNestedOneWithoutWebsitesInput = {
    create?: XOR<userCreateWithoutWebsitesInput, userUncheckedCreateWithoutWebsitesInput>
    connectOrCreate?: userCreateOrConnectWithoutWebsitesInput
    connect?: userWhereUniqueInput
  }

  export type website_tickUncheckedCreateNestedManyWithoutWebsiteInput = {
    create?: XOR<website_tickCreateWithoutWebsiteInput, website_tickUncheckedCreateWithoutWebsiteInput> | website_tickCreateWithoutWebsiteInput[] | website_tickUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: website_tickCreateOrConnectWithoutWebsiteInput | website_tickCreateOrConnectWithoutWebsiteInput[]
    createMany?: website_tickCreateManyWebsiteInputEnvelope
    connect?: website_tickWhereUniqueInput | website_tickWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type website_tickUpdateManyWithoutWebsiteNestedInput = {
    create?: XOR<website_tickCreateWithoutWebsiteInput, website_tickUncheckedCreateWithoutWebsiteInput> | website_tickCreateWithoutWebsiteInput[] | website_tickUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: website_tickCreateOrConnectWithoutWebsiteInput | website_tickCreateOrConnectWithoutWebsiteInput[]
    upsert?: website_tickUpsertWithWhereUniqueWithoutWebsiteInput | website_tickUpsertWithWhereUniqueWithoutWebsiteInput[]
    createMany?: website_tickCreateManyWebsiteInputEnvelope
    set?: website_tickWhereUniqueInput | website_tickWhereUniqueInput[]
    disconnect?: website_tickWhereUniqueInput | website_tickWhereUniqueInput[]
    delete?: website_tickWhereUniqueInput | website_tickWhereUniqueInput[]
    connect?: website_tickWhereUniqueInput | website_tickWhereUniqueInput[]
    update?: website_tickUpdateWithWhereUniqueWithoutWebsiteInput | website_tickUpdateWithWhereUniqueWithoutWebsiteInput[]
    updateMany?: website_tickUpdateManyWithWhereWithoutWebsiteInput | website_tickUpdateManyWithWhereWithoutWebsiteInput[]
    deleteMany?: website_tickScalarWhereInput | website_tickScalarWhereInput[]
  }

  export type userUpdateOneRequiredWithoutWebsitesNestedInput = {
    create?: XOR<userCreateWithoutWebsitesInput, userUncheckedCreateWithoutWebsitesInput>
    connectOrCreate?: userCreateOrConnectWithoutWebsitesInput
    upsert?: userUpsertWithoutWebsitesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutWebsitesInput, userUpdateWithoutWebsitesInput>, userUncheckedUpdateWithoutWebsitesInput>
  }

  export type website_tickUncheckedUpdateManyWithoutWebsiteNestedInput = {
    create?: XOR<website_tickCreateWithoutWebsiteInput, website_tickUncheckedCreateWithoutWebsiteInput> | website_tickCreateWithoutWebsiteInput[] | website_tickUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: website_tickCreateOrConnectWithoutWebsiteInput | website_tickCreateOrConnectWithoutWebsiteInput[]
    upsert?: website_tickUpsertWithWhereUniqueWithoutWebsiteInput | website_tickUpsertWithWhereUniqueWithoutWebsiteInput[]
    createMany?: website_tickCreateManyWebsiteInputEnvelope
    set?: website_tickWhereUniqueInput | website_tickWhereUniqueInput[]
    disconnect?: website_tickWhereUniqueInput | website_tickWhereUniqueInput[]
    delete?: website_tickWhereUniqueInput | website_tickWhereUniqueInput[]
    connect?: website_tickWhereUniqueInput | website_tickWhereUniqueInput[]
    update?: website_tickUpdateWithWhereUniqueWithoutWebsiteInput | website_tickUpdateWithWhereUniqueWithoutWebsiteInput[]
    updateMany?: website_tickUpdateManyWithWhereWithoutWebsiteInput | website_tickUpdateManyWithWhereWithoutWebsiteInput[]
    deleteMany?: website_tickScalarWhereInput | website_tickScalarWhereInput[]
  }

  export type website_tickCreateNestedManyWithoutRegionInput = {
    create?: XOR<website_tickCreateWithoutRegionInput, website_tickUncheckedCreateWithoutRegionInput> | website_tickCreateWithoutRegionInput[] | website_tickUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: website_tickCreateOrConnectWithoutRegionInput | website_tickCreateOrConnectWithoutRegionInput[]
    createMany?: website_tickCreateManyRegionInputEnvelope
    connect?: website_tickWhereUniqueInput | website_tickWhereUniqueInput[]
  }

  export type website_tickUncheckedCreateNestedManyWithoutRegionInput = {
    create?: XOR<website_tickCreateWithoutRegionInput, website_tickUncheckedCreateWithoutRegionInput> | website_tickCreateWithoutRegionInput[] | website_tickUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: website_tickCreateOrConnectWithoutRegionInput | website_tickCreateOrConnectWithoutRegionInput[]
    createMany?: website_tickCreateManyRegionInputEnvelope
    connect?: website_tickWhereUniqueInput | website_tickWhereUniqueInput[]
  }

  export type website_tickUpdateManyWithoutRegionNestedInput = {
    create?: XOR<website_tickCreateWithoutRegionInput, website_tickUncheckedCreateWithoutRegionInput> | website_tickCreateWithoutRegionInput[] | website_tickUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: website_tickCreateOrConnectWithoutRegionInput | website_tickCreateOrConnectWithoutRegionInput[]
    upsert?: website_tickUpsertWithWhereUniqueWithoutRegionInput | website_tickUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: website_tickCreateManyRegionInputEnvelope
    set?: website_tickWhereUniqueInput | website_tickWhereUniqueInput[]
    disconnect?: website_tickWhereUniqueInput | website_tickWhereUniqueInput[]
    delete?: website_tickWhereUniqueInput | website_tickWhereUniqueInput[]
    connect?: website_tickWhereUniqueInput | website_tickWhereUniqueInput[]
    update?: website_tickUpdateWithWhereUniqueWithoutRegionInput | website_tickUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: website_tickUpdateManyWithWhereWithoutRegionInput | website_tickUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: website_tickScalarWhereInput | website_tickScalarWhereInput[]
  }

  export type website_tickUncheckedUpdateManyWithoutRegionNestedInput = {
    create?: XOR<website_tickCreateWithoutRegionInput, website_tickUncheckedCreateWithoutRegionInput> | website_tickCreateWithoutRegionInput[] | website_tickUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: website_tickCreateOrConnectWithoutRegionInput | website_tickCreateOrConnectWithoutRegionInput[]
    upsert?: website_tickUpsertWithWhereUniqueWithoutRegionInput | website_tickUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: website_tickCreateManyRegionInputEnvelope
    set?: website_tickWhereUniqueInput | website_tickWhereUniqueInput[]
    disconnect?: website_tickWhereUniqueInput | website_tickWhereUniqueInput[]
    delete?: website_tickWhereUniqueInput | website_tickWhereUniqueInput[]
    connect?: website_tickWhereUniqueInput | website_tickWhereUniqueInput[]
    update?: website_tickUpdateWithWhereUniqueWithoutRegionInput | website_tickUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: website_tickUpdateManyWithWhereWithoutRegionInput | website_tickUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: website_tickScalarWhereInput | website_tickScalarWhereInput[]
  }

  export type regionCreateNestedOneWithoutTickesInput = {
    create?: XOR<regionCreateWithoutTickesInput, regionUncheckedCreateWithoutTickesInput>
    connectOrCreate?: regionCreateOrConnectWithoutTickesInput
    connect?: regionWhereUniqueInput
  }

  export type websiteCreateNestedOneWithoutTicksInput = {
    create?: XOR<websiteCreateWithoutTicksInput, websiteUncheckedCreateWithoutTicksInput>
    connectOrCreate?: websiteCreateOrConnectWithoutTicksInput
    connect?: websiteWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Enumwebsite_statusFieldUpdateOperationsInput = {
    set?: $Enums.website_status
  }

  export type regionUpdateOneRequiredWithoutTickesNestedInput = {
    create?: XOR<regionCreateWithoutTickesInput, regionUncheckedCreateWithoutTickesInput>
    connectOrCreate?: regionCreateOrConnectWithoutTickesInput
    upsert?: regionUpsertWithoutTickesInput
    connect?: regionWhereUniqueInput
    update?: XOR<XOR<regionUpdateToOneWithWhereWithoutTickesInput, regionUpdateWithoutTickesInput>, regionUncheckedUpdateWithoutTickesInput>
  }

  export type websiteUpdateOneRequiredWithoutTicksNestedInput = {
    create?: XOR<websiteCreateWithoutTicksInput, websiteUncheckedCreateWithoutTicksInput>
    connectOrCreate?: websiteCreateOrConnectWithoutTicksInput
    upsert?: websiteUpsertWithoutTicksInput
    connect?: websiteWhereUniqueInput
    update?: XOR<XOR<websiteUpdateToOneWithWhereWithoutTicksInput, websiteUpdateWithoutTicksInput>, websiteUncheckedUpdateWithoutTicksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumwebsite_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.website_status | Enumwebsite_statusFieldRefInput<$PrismaModel>
    in?: $Enums.website_status[] | ListEnumwebsite_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.website_status[] | ListEnumwebsite_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumwebsite_statusFilter<$PrismaModel> | $Enums.website_status
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumwebsite_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.website_status | Enumwebsite_statusFieldRefInput<$PrismaModel>
    in?: $Enums.website_status[] | ListEnumwebsite_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.website_status[] | ListEnumwebsite_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumwebsite_statusWithAggregatesFilter<$PrismaModel> | $Enums.website_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumwebsite_statusFilter<$PrismaModel>
    _max?: NestedEnumwebsite_statusFilter<$PrismaModel>
  }

  export type websiteCreateWithoutUserInput = {
    id?: string
    url: string
    time_added: Date | string
    ticks?: website_tickCreateNestedManyWithoutWebsiteInput
  }

  export type websiteUncheckedCreateWithoutUserInput = {
    id?: string
    url: string
    time_added: Date | string
    ticks?: website_tickUncheckedCreateNestedManyWithoutWebsiteInput
  }

  export type websiteCreateOrConnectWithoutUserInput = {
    where: websiteWhereUniqueInput
    create: XOR<websiteCreateWithoutUserInput, websiteUncheckedCreateWithoutUserInput>
  }

  export type websiteCreateManyUserInputEnvelope = {
    data: websiteCreateManyUserInput | websiteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type websiteUpsertWithWhereUniqueWithoutUserInput = {
    where: websiteWhereUniqueInput
    update: XOR<websiteUpdateWithoutUserInput, websiteUncheckedUpdateWithoutUserInput>
    create: XOR<websiteCreateWithoutUserInput, websiteUncheckedCreateWithoutUserInput>
  }

  export type websiteUpdateWithWhereUniqueWithoutUserInput = {
    where: websiteWhereUniqueInput
    data: XOR<websiteUpdateWithoutUserInput, websiteUncheckedUpdateWithoutUserInput>
  }

  export type websiteUpdateManyWithWhereWithoutUserInput = {
    where: websiteScalarWhereInput
    data: XOR<websiteUpdateManyMutationInput, websiteUncheckedUpdateManyWithoutUserInput>
  }

  export type websiteScalarWhereInput = {
    AND?: websiteScalarWhereInput | websiteScalarWhereInput[]
    OR?: websiteScalarWhereInput[]
    NOT?: websiteScalarWhereInput | websiteScalarWhereInput[]
    id?: StringFilter<"website"> | string
    url?: StringFilter<"website"> | string
    user_id?: StringFilter<"website"> | string
    time_added?: DateTimeFilter<"website"> | Date | string
  }

  export type website_tickCreateWithoutWebsiteInput = {
    id?: string
    response_time_ms: number
    status: $Enums.website_status
    createdAt?: Date | string
    region: regionCreateNestedOneWithoutTickesInput
  }

  export type website_tickUncheckedCreateWithoutWebsiteInput = {
    id?: string
    response_time_ms: number
    status: $Enums.website_status
    region_id: string
    createdAt?: Date | string
  }

  export type website_tickCreateOrConnectWithoutWebsiteInput = {
    where: website_tickWhereUniqueInput
    create: XOR<website_tickCreateWithoutWebsiteInput, website_tickUncheckedCreateWithoutWebsiteInput>
  }

  export type website_tickCreateManyWebsiteInputEnvelope = {
    data: website_tickCreateManyWebsiteInput | website_tickCreateManyWebsiteInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutWebsitesInput = {
    id?: string
    username: string
    password: string
  }

  export type userUncheckedCreateWithoutWebsitesInput = {
    id?: string
    username: string
    password: string
  }

  export type userCreateOrConnectWithoutWebsitesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutWebsitesInput, userUncheckedCreateWithoutWebsitesInput>
  }

  export type website_tickUpsertWithWhereUniqueWithoutWebsiteInput = {
    where: website_tickWhereUniqueInput
    update: XOR<website_tickUpdateWithoutWebsiteInput, website_tickUncheckedUpdateWithoutWebsiteInput>
    create: XOR<website_tickCreateWithoutWebsiteInput, website_tickUncheckedCreateWithoutWebsiteInput>
  }

  export type website_tickUpdateWithWhereUniqueWithoutWebsiteInput = {
    where: website_tickWhereUniqueInput
    data: XOR<website_tickUpdateWithoutWebsiteInput, website_tickUncheckedUpdateWithoutWebsiteInput>
  }

  export type website_tickUpdateManyWithWhereWithoutWebsiteInput = {
    where: website_tickScalarWhereInput
    data: XOR<website_tickUpdateManyMutationInput, website_tickUncheckedUpdateManyWithoutWebsiteInput>
  }

  export type website_tickScalarWhereInput = {
    AND?: website_tickScalarWhereInput | website_tickScalarWhereInput[]
    OR?: website_tickScalarWhereInput[]
    NOT?: website_tickScalarWhereInput | website_tickScalarWhereInput[]
    id?: StringFilter<"website_tick"> | string
    response_time_ms?: IntFilter<"website_tick"> | number
    status?: Enumwebsite_statusFilter<"website_tick"> | $Enums.website_status
    region_id?: StringFilter<"website_tick"> | string
    website_id?: StringFilter<"website_tick"> | string
    createdAt?: DateTimeFilter<"website_tick"> | Date | string
  }

  export type userUpsertWithoutWebsitesInput = {
    update: XOR<userUpdateWithoutWebsitesInput, userUncheckedUpdateWithoutWebsitesInput>
    create: XOR<userCreateWithoutWebsitesInput, userUncheckedCreateWithoutWebsitesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutWebsitesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutWebsitesInput, userUncheckedUpdateWithoutWebsitesInput>
  }

  export type userUpdateWithoutWebsitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateWithoutWebsitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type website_tickCreateWithoutRegionInput = {
    id?: string
    response_time_ms: number
    status: $Enums.website_status
    createdAt?: Date | string
    website: websiteCreateNestedOneWithoutTicksInput
  }

  export type website_tickUncheckedCreateWithoutRegionInput = {
    id?: string
    response_time_ms: number
    status: $Enums.website_status
    website_id: string
    createdAt?: Date | string
  }

  export type website_tickCreateOrConnectWithoutRegionInput = {
    where: website_tickWhereUniqueInput
    create: XOR<website_tickCreateWithoutRegionInput, website_tickUncheckedCreateWithoutRegionInput>
  }

  export type website_tickCreateManyRegionInputEnvelope = {
    data: website_tickCreateManyRegionInput | website_tickCreateManyRegionInput[]
    skipDuplicates?: boolean
  }

  export type website_tickUpsertWithWhereUniqueWithoutRegionInput = {
    where: website_tickWhereUniqueInput
    update: XOR<website_tickUpdateWithoutRegionInput, website_tickUncheckedUpdateWithoutRegionInput>
    create: XOR<website_tickCreateWithoutRegionInput, website_tickUncheckedCreateWithoutRegionInput>
  }

  export type website_tickUpdateWithWhereUniqueWithoutRegionInput = {
    where: website_tickWhereUniqueInput
    data: XOR<website_tickUpdateWithoutRegionInput, website_tickUncheckedUpdateWithoutRegionInput>
  }

  export type website_tickUpdateManyWithWhereWithoutRegionInput = {
    where: website_tickScalarWhereInput
    data: XOR<website_tickUpdateManyMutationInput, website_tickUncheckedUpdateManyWithoutRegionInput>
  }

  export type regionCreateWithoutTickesInput = {
    id?: string
    name: string
  }

  export type regionUncheckedCreateWithoutTickesInput = {
    id?: string
    name: string
  }

  export type regionCreateOrConnectWithoutTickesInput = {
    where: regionWhereUniqueInput
    create: XOR<regionCreateWithoutTickesInput, regionUncheckedCreateWithoutTickesInput>
  }

  export type websiteCreateWithoutTicksInput = {
    id?: string
    url: string
    time_added: Date | string
    user: userCreateNestedOneWithoutWebsitesInput
  }

  export type websiteUncheckedCreateWithoutTicksInput = {
    id?: string
    url: string
    user_id: string
    time_added: Date | string
  }

  export type websiteCreateOrConnectWithoutTicksInput = {
    where: websiteWhereUniqueInput
    create: XOR<websiteCreateWithoutTicksInput, websiteUncheckedCreateWithoutTicksInput>
  }

  export type regionUpsertWithoutTickesInput = {
    update: XOR<regionUpdateWithoutTickesInput, regionUncheckedUpdateWithoutTickesInput>
    create: XOR<regionCreateWithoutTickesInput, regionUncheckedCreateWithoutTickesInput>
    where?: regionWhereInput
  }

  export type regionUpdateToOneWithWhereWithoutTickesInput = {
    where?: regionWhereInput
    data: XOR<regionUpdateWithoutTickesInput, regionUncheckedUpdateWithoutTickesInput>
  }

  export type regionUpdateWithoutTickesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type regionUncheckedUpdateWithoutTickesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type websiteUpsertWithoutTicksInput = {
    update: XOR<websiteUpdateWithoutTicksInput, websiteUncheckedUpdateWithoutTicksInput>
    create: XOR<websiteCreateWithoutTicksInput, websiteUncheckedCreateWithoutTicksInput>
    where?: websiteWhereInput
  }

  export type websiteUpdateToOneWithWhereWithoutTicksInput = {
    where?: websiteWhereInput
    data: XOR<websiteUpdateWithoutTicksInput, websiteUncheckedUpdateWithoutTicksInput>
  }

  export type websiteUpdateWithoutTicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    time_added?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutWebsitesNestedInput
  }

  export type websiteUncheckedUpdateWithoutTicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    time_added?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type websiteCreateManyUserInput = {
    id?: string
    url: string
    time_added: Date | string
  }

  export type websiteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    time_added?: DateTimeFieldUpdateOperationsInput | Date | string
    ticks?: website_tickUpdateManyWithoutWebsiteNestedInput
  }

  export type websiteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    time_added?: DateTimeFieldUpdateOperationsInput | Date | string
    ticks?: website_tickUncheckedUpdateManyWithoutWebsiteNestedInput
  }

  export type websiteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    time_added?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type website_tickCreateManyWebsiteInput = {
    id?: string
    response_time_ms: number
    status: $Enums.website_status
    region_id: string
    createdAt?: Date | string
  }

  export type website_tickUpdateWithoutWebsiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: Enumwebsite_statusFieldUpdateOperationsInput | $Enums.website_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: regionUpdateOneRequiredWithoutTickesNestedInput
  }

  export type website_tickUncheckedUpdateWithoutWebsiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: Enumwebsite_statusFieldUpdateOperationsInput | $Enums.website_status
    region_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type website_tickUncheckedUpdateManyWithoutWebsiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: Enumwebsite_statusFieldUpdateOperationsInput | $Enums.website_status
    region_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type website_tickCreateManyRegionInput = {
    id?: string
    response_time_ms: number
    status: $Enums.website_status
    website_id: string
    createdAt?: Date | string
  }

  export type website_tickUpdateWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: Enumwebsite_statusFieldUpdateOperationsInput | $Enums.website_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    website?: websiteUpdateOneRequiredWithoutTicksNestedInput
  }

  export type website_tickUncheckedUpdateWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: Enumwebsite_statusFieldUpdateOperationsInput | $Enums.website_status
    website_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type website_tickUncheckedUpdateManyWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: Enumwebsite_statusFieldUpdateOperationsInput | $Enums.website_status
    website_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}