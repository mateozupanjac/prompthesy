
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
 * Model Trigram
 * ---------- Canonical I Ching content ----------
 */
export type Trigram = $Result.DefaultSelection<Prisma.$TrigramPayload>
/**
 * Model Hexagram
 * 
 */
export type Hexagram = $Result.DefaultSelection<Prisma.$HexagramPayload>
/**
 * Model Line
 * 
 */
export type Line = $Result.DefaultSelection<Prisma.$LinePayload>
/**
 * Model ContentSource
 * Keep original JSON/text you typed (for provenance/versioning)
 */
export type ContentSource = $Result.DefaultSelection<Prisma.$ContentSourcePayload>
/**
 * Model User
 * ---------- Auth.js v5 compatible ----------
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Reading
 * ---------- App domain (readings, chat, share) ----------
 */
export type Reading = $Result.DefaultSelection<Prisma.$ReadingPayload>
/**
 * Model ChatSession
 * 
 */
export type ChatSession = $Result.DefaultSelection<Prisma.$ChatSessionPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model ShareLink
 * 
 */
export type ShareLink = $Result.DefaultSelection<Prisma.$ShareLinkPayload>
/**
 * Model Favorite
 * 
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>
/**
 * Model JournalEntry
 * 
 */
export type JournalEntry = $Result.DefaultSelection<Prisma.$JournalEntryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Trigrams
 * const trigrams = await prisma.trigram.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Trigrams
   * const trigrams = await prisma.trigram.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.trigram`: Exposes CRUD operations for the **Trigram** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trigrams
    * const trigrams = await prisma.trigram.findMany()
    * ```
    */
  get trigram(): Prisma.TrigramDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hexagram`: Exposes CRUD operations for the **Hexagram** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hexagrams
    * const hexagrams = await prisma.hexagram.findMany()
    * ```
    */
  get hexagram(): Prisma.HexagramDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.line`: Exposes CRUD operations for the **Line** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lines
    * const lines = await prisma.line.findMany()
    * ```
    */
  get line(): Prisma.LineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contentSource`: Exposes CRUD operations for the **ContentSource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContentSources
    * const contentSources = await prisma.contentSource.findMany()
    * ```
    */
  get contentSource(): Prisma.ContentSourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reading`: Exposes CRUD operations for the **Reading** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Readings
    * const readings = await prisma.reading.findMany()
    * ```
    */
  get reading(): Prisma.ReadingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatSession`: Exposes CRUD operations for the **ChatSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatSessions
    * const chatSessions = await prisma.chatSession.findMany()
    * ```
    */
  get chatSession(): Prisma.ChatSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shareLink`: Exposes CRUD operations for the **ShareLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShareLinks
    * const shareLinks = await prisma.shareLink.findMany()
    * ```
    */
  get shareLink(): Prisma.ShareLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.journalEntry`: Exposes CRUD operations for the **JournalEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JournalEntries
    * const journalEntries = await prisma.journalEntry.findMany()
    * ```
    */
  get journalEntry(): Prisma.JournalEntryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Trigram: 'Trigram',
    Hexagram: 'Hexagram',
    Line: 'Line',
    ContentSource: 'ContentSource',
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Reading: 'Reading',
    ChatSession: 'ChatSession',
    ChatMessage: 'ChatMessage',
    ShareLink: 'ShareLink',
    Favorite: 'Favorite',
    JournalEntry: 'JournalEntry'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "trigram" | "hexagram" | "line" | "contentSource" | "user" | "account" | "session" | "verificationToken" | "reading" | "chatSession" | "chatMessage" | "shareLink" | "favorite" | "journalEntry"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Trigram: {
        payload: Prisma.$TrigramPayload<ExtArgs>
        fields: Prisma.TrigramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrigramFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrigramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrigramFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrigramPayload>
          }
          findFirst: {
            args: Prisma.TrigramFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrigramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrigramFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrigramPayload>
          }
          findMany: {
            args: Prisma.TrigramFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrigramPayload>[]
          }
          create: {
            args: Prisma.TrigramCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrigramPayload>
          }
          createMany: {
            args: Prisma.TrigramCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrigramCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrigramPayload>[]
          }
          delete: {
            args: Prisma.TrigramDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrigramPayload>
          }
          update: {
            args: Prisma.TrigramUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrigramPayload>
          }
          deleteMany: {
            args: Prisma.TrigramDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrigramUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrigramUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrigramPayload>[]
          }
          upsert: {
            args: Prisma.TrigramUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrigramPayload>
          }
          aggregate: {
            args: Prisma.TrigramAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrigram>
          }
          groupBy: {
            args: Prisma.TrigramGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrigramGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrigramCountArgs<ExtArgs>
            result: $Utils.Optional<TrigramCountAggregateOutputType> | number
          }
        }
      }
      Hexagram: {
        payload: Prisma.$HexagramPayload<ExtArgs>
        fields: Prisma.HexagramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HexagramFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HexagramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HexagramFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HexagramPayload>
          }
          findFirst: {
            args: Prisma.HexagramFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HexagramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HexagramFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HexagramPayload>
          }
          findMany: {
            args: Prisma.HexagramFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HexagramPayload>[]
          }
          create: {
            args: Prisma.HexagramCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HexagramPayload>
          }
          createMany: {
            args: Prisma.HexagramCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HexagramCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HexagramPayload>[]
          }
          delete: {
            args: Prisma.HexagramDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HexagramPayload>
          }
          update: {
            args: Prisma.HexagramUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HexagramPayload>
          }
          deleteMany: {
            args: Prisma.HexagramDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HexagramUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HexagramUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HexagramPayload>[]
          }
          upsert: {
            args: Prisma.HexagramUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HexagramPayload>
          }
          aggregate: {
            args: Prisma.HexagramAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHexagram>
          }
          groupBy: {
            args: Prisma.HexagramGroupByArgs<ExtArgs>
            result: $Utils.Optional<HexagramGroupByOutputType>[]
          }
          count: {
            args: Prisma.HexagramCountArgs<ExtArgs>
            result: $Utils.Optional<HexagramCountAggregateOutputType> | number
          }
        }
      }
      Line: {
        payload: Prisma.$LinePayload<ExtArgs>
        fields: Prisma.LineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          findFirst: {
            args: Prisma.LineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          findMany: {
            args: Prisma.LineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>[]
          }
          create: {
            args: Prisma.LineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          createMany: {
            args: Prisma.LineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>[]
          }
          delete: {
            args: Prisma.LineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          update: {
            args: Prisma.LineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          deleteMany: {
            args: Prisma.LineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>[]
          }
          upsert: {
            args: Prisma.LineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          aggregate: {
            args: Prisma.LineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLine>
          }
          groupBy: {
            args: Prisma.LineGroupByArgs<ExtArgs>
            result: $Utils.Optional<LineGroupByOutputType>[]
          }
          count: {
            args: Prisma.LineCountArgs<ExtArgs>
            result: $Utils.Optional<LineCountAggregateOutputType> | number
          }
        }
      }
      ContentSource: {
        payload: Prisma.$ContentSourcePayload<ExtArgs>
        fields: Prisma.ContentSourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentSourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentSourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSourcePayload>
          }
          findFirst: {
            args: Prisma.ContentSourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentSourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSourcePayload>
          }
          findMany: {
            args: Prisma.ContentSourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSourcePayload>[]
          }
          create: {
            args: Prisma.ContentSourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSourcePayload>
          }
          createMany: {
            args: Prisma.ContentSourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentSourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSourcePayload>[]
          }
          delete: {
            args: Prisma.ContentSourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSourcePayload>
          }
          update: {
            args: Prisma.ContentSourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSourcePayload>
          }
          deleteMany: {
            args: Prisma.ContentSourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentSourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContentSourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSourcePayload>[]
          }
          upsert: {
            args: Prisma.ContentSourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSourcePayload>
          }
          aggregate: {
            args: Prisma.ContentSourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContentSource>
          }
          groupBy: {
            args: Prisma.ContentSourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentSourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentSourceCountArgs<ExtArgs>
            result: $Utils.Optional<ContentSourceCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Reading: {
        payload: Prisma.$ReadingPayload<ExtArgs>
        fields: Prisma.ReadingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReadingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReadingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>
          }
          findFirst: {
            args: Prisma.ReadingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReadingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>
          }
          findMany: {
            args: Prisma.ReadingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>[]
          }
          create: {
            args: Prisma.ReadingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>
          }
          createMany: {
            args: Prisma.ReadingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReadingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>[]
          }
          delete: {
            args: Prisma.ReadingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>
          }
          update: {
            args: Prisma.ReadingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>
          }
          deleteMany: {
            args: Prisma.ReadingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReadingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReadingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>[]
          }
          upsert: {
            args: Prisma.ReadingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>
          }
          aggregate: {
            args: Prisma.ReadingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReading>
          }
          groupBy: {
            args: Prisma.ReadingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReadingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReadingCountArgs<ExtArgs>
            result: $Utils.Optional<ReadingCountAggregateOutputType> | number
          }
        }
      }
      ChatSession: {
        payload: Prisma.$ChatSessionPayload<ExtArgs>
        fields: Prisma.ChatSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findFirst: {
            args: Prisma.ChatSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findMany: {
            args: Prisma.ChatSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          create: {
            args: Prisma.ChatSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          createMany: {
            args: Prisma.ChatSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          delete: {
            args: Prisma.ChatSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          update: {
            args: Prisma.ChatSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          deleteMany: {
            args: Prisma.ChatSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          upsert: {
            args: Prisma.ChatSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          aggregate: {
            args: Prisma.ChatSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatSession>
          }
          groupBy: {
            args: Prisma.ChatSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      ShareLink: {
        payload: Prisma.$ShareLinkPayload<ExtArgs>
        fields: Prisma.ShareLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShareLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShareLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          findFirst: {
            args: Prisma.ShareLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShareLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          findMany: {
            args: Prisma.ShareLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>[]
          }
          create: {
            args: Prisma.ShareLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          createMany: {
            args: Prisma.ShareLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShareLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>[]
          }
          delete: {
            args: Prisma.ShareLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          update: {
            args: Prisma.ShareLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          deleteMany: {
            args: Prisma.ShareLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShareLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShareLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>[]
          }
          upsert: {
            args: Prisma.ShareLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareLinkPayload>
          }
          aggregate: {
            args: Prisma.ShareLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShareLink>
          }
          groupBy: {
            args: Prisma.ShareLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShareLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShareLinkCountArgs<ExtArgs>
            result: $Utils.Optional<ShareLinkCountAggregateOutputType> | number
          }
        }
      }
      Favorite: {
        payload: Prisma.$FavoritePayload<ExtArgs>
        fields: Prisma.FavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findFirst: {
            args: Prisma.FavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findMany: {
            args: Prisma.FavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          create: {
            args: Prisma.FavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          createMany: {
            args: Prisma.FavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          delete: {
            args: Prisma.FavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          update: {
            args: Prisma.FavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          upsert: {
            args: Prisma.FavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.FavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
          }
        }
      }
      JournalEntry: {
        payload: Prisma.$JournalEntryPayload<ExtArgs>
        fields: Prisma.JournalEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JournalEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JournalEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          findFirst: {
            args: Prisma.JournalEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JournalEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          findMany: {
            args: Prisma.JournalEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>[]
          }
          create: {
            args: Prisma.JournalEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          createMany: {
            args: Prisma.JournalEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JournalEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>[]
          }
          delete: {
            args: Prisma.JournalEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          update: {
            args: Prisma.JournalEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          deleteMany: {
            args: Prisma.JournalEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JournalEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JournalEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>[]
          }
          upsert: {
            args: Prisma.JournalEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          aggregate: {
            args: Prisma.JournalEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJournalEntry>
          }
          groupBy: {
            args: Prisma.JournalEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<JournalEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.JournalEntryCountArgs<ExtArgs>
            result: $Utils.Optional<JournalEntryCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    trigram?: TrigramOmit
    hexagram?: HexagramOmit
    line?: LineOmit
    contentSource?: ContentSourceOmit
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    reading?: ReadingOmit
    chatSession?: ChatSessionOmit
    chatMessage?: ChatMessageOmit
    shareLink?: ShareLinkOmit
    favorite?: FavoriteOmit
    journalEntry?: JournalEntryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type TrigramCountOutputType
   */

  export type TrigramCountOutputType = {
    upperOf: number
    lowerOf: number
  }

  export type TrigramCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    upperOf?: boolean | TrigramCountOutputTypeCountUpperOfArgs
    lowerOf?: boolean | TrigramCountOutputTypeCountLowerOfArgs
  }

  // Custom InputTypes
  /**
   * TrigramCountOutputType without action
   */
  export type TrigramCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrigramCountOutputType
     */
    select?: TrigramCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrigramCountOutputType without action
   */
  export type TrigramCountOutputTypeCountUpperOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HexagramWhereInput
  }

  /**
   * TrigramCountOutputType without action
   */
  export type TrigramCountOutputTypeCountLowerOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HexagramWhereInput
  }


  /**
   * Count Type HexagramCountOutputType
   */

  export type HexagramCountOutputType = {
    lines: number
    baseForReadings: number
    resultForReadings: number
  }

  export type HexagramCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lines?: boolean | HexagramCountOutputTypeCountLinesArgs
    baseForReadings?: boolean | HexagramCountOutputTypeCountBaseForReadingsArgs
    resultForReadings?: boolean | HexagramCountOutputTypeCountResultForReadingsArgs
  }

  // Custom InputTypes
  /**
   * HexagramCountOutputType without action
   */
  export type HexagramCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HexagramCountOutputType
     */
    select?: HexagramCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HexagramCountOutputType without action
   */
  export type HexagramCountOutputTypeCountLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LineWhereInput
  }

  /**
   * HexagramCountOutputType without action
   */
  export type HexagramCountOutputTypeCountBaseForReadingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReadingWhereInput
  }

  /**
   * HexagramCountOutputType without action
   */
  export type HexagramCountOutputTypeCountResultForReadingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReadingWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    readings: number
    chats: number
    favorites: number
    journal: number
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    readings?: boolean | UserCountOutputTypeCountReadingsArgs
    chats?: boolean | UserCountOutputTypeCountChatsArgs
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs
    journal?: boolean | UserCountOutputTypeCountJournalArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountReadingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReadingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJournalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JournalEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type ReadingCountOutputType
   */

  export type ReadingCountOutputType = {
    chats: number
    shares: number
    favorites: number
  }

  export type ReadingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | ReadingCountOutputTypeCountChatsArgs
    shares?: boolean | ReadingCountOutputTypeCountSharesArgs
    favorites?: boolean | ReadingCountOutputTypeCountFavoritesArgs
  }

  // Custom InputTypes
  /**
   * ReadingCountOutputType without action
   */
  export type ReadingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingCountOutputType
     */
    select?: ReadingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReadingCountOutputType without action
   */
  export type ReadingCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
  }

  /**
   * ReadingCountOutputType without action
   */
  export type ReadingCountOutputTypeCountSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareLinkWhereInput
  }

  /**
   * ReadingCountOutputType without action
   */
  export type ReadingCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }


  /**
   * Count Type ChatSessionCountOutputType
   */

  export type ChatSessionCountOutputType = {
    messages: number
  }

  export type ChatSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatSessionCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSessionCountOutputType
     */
    select?: ChatSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Trigram
   */

  export type AggregateTrigram = {
    _count: TrigramCountAggregateOutputType | null
    _avg: TrigramAvgAggregateOutputType | null
    _sum: TrigramSumAggregateOutputType | null
    _min: TrigramMinAggregateOutputType | null
    _max: TrigramMaxAggregateOutputType | null
  }

  export type TrigramAvgAggregateOutputType = {
    id: number | null
  }

  export type TrigramSumAggregateOutputType = {
    id: number | null
  }

  export type TrigramMinAggregateOutputType = {
    id: number | null
    key: string | null
    name: string | null
    meaning: string | null
  }

  export type TrigramMaxAggregateOutputType = {
    id: number | null
    key: string | null
    name: string | null
    meaning: string | null
  }

  export type TrigramCountAggregateOutputType = {
    id: number
    key: number
    name: number
    meaning: number
    _all: number
  }


  export type TrigramAvgAggregateInputType = {
    id?: true
  }

  export type TrigramSumAggregateInputType = {
    id?: true
  }

  export type TrigramMinAggregateInputType = {
    id?: true
    key?: true
    name?: true
    meaning?: true
  }

  export type TrigramMaxAggregateInputType = {
    id?: true
    key?: true
    name?: true
    meaning?: true
  }

  export type TrigramCountAggregateInputType = {
    id?: true
    key?: true
    name?: true
    meaning?: true
    _all?: true
  }

  export type TrigramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trigram to aggregate.
     */
    where?: TrigramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trigrams to fetch.
     */
    orderBy?: TrigramOrderByWithRelationInput | TrigramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrigramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trigrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trigrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trigrams
    **/
    _count?: true | TrigramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrigramAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrigramSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrigramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrigramMaxAggregateInputType
  }

  export type GetTrigramAggregateType<T extends TrigramAggregateArgs> = {
        [P in keyof T & keyof AggregateTrigram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrigram[P]>
      : GetScalarType<T[P], AggregateTrigram[P]>
  }




  export type TrigramGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrigramWhereInput
    orderBy?: TrigramOrderByWithAggregationInput | TrigramOrderByWithAggregationInput[]
    by: TrigramScalarFieldEnum[] | TrigramScalarFieldEnum
    having?: TrigramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrigramCountAggregateInputType | true
    _avg?: TrigramAvgAggregateInputType
    _sum?: TrigramSumAggregateInputType
    _min?: TrigramMinAggregateInputType
    _max?: TrigramMaxAggregateInputType
  }

  export type TrigramGroupByOutputType = {
    id: number
    key: string
    name: string
    meaning: string | null
    _count: TrigramCountAggregateOutputType | null
    _avg: TrigramAvgAggregateOutputType | null
    _sum: TrigramSumAggregateOutputType | null
    _min: TrigramMinAggregateOutputType | null
    _max: TrigramMaxAggregateOutputType | null
  }

  type GetTrigramGroupByPayload<T extends TrigramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrigramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrigramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrigramGroupByOutputType[P]>
            : GetScalarType<T[P], TrigramGroupByOutputType[P]>
        }
      >
    >


  export type TrigramSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    meaning?: boolean
    upperOf?: boolean | Trigram$upperOfArgs<ExtArgs>
    lowerOf?: boolean | Trigram$lowerOfArgs<ExtArgs>
    _count?: boolean | TrigramCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigram"]>

  export type TrigramSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    meaning?: boolean
  }, ExtArgs["result"]["trigram"]>

  export type TrigramSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    meaning?: boolean
  }, ExtArgs["result"]["trigram"]>

  export type TrigramSelectScalar = {
    id?: boolean
    key?: boolean
    name?: boolean
    meaning?: boolean
  }

  export type TrigramOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "name" | "meaning", ExtArgs["result"]["trigram"]>
  export type TrigramInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    upperOf?: boolean | Trigram$upperOfArgs<ExtArgs>
    lowerOf?: boolean | Trigram$lowerOfArgs<ExtArgs>
    _count?: boolean | TrigramCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TrigramIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TrigramIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TrigramPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trigram"
    objects: {
      upperOf: Prisma.$HexagramPayload<ExtArgs>[]
      lowerOf: Prisma.$HexagramPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      key: string
      name: string
      meaning: string | null
    }, ExtArgs["result"]["trigram"]>
    composites: {}
  }

  type TrigramGetPayload<S extends boolean | null | undefined | TrigramDefaultArgs> = $Result.GetResult<Prisma.$TrigramPayload, S>

  type TrigramCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrigramFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrigramCountAggregateInputType | true
    }

  export interface TrigramDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trigram'], meta: { name: 'Trigram' } }
    /**
     * Find zero or one Trigram that matches the filter.
     * @param {TrigramFindUniqueArgs} args - Arguments to find a Trigram
     * @example
     * // Get one Trigram
     * const trigram = await prisma.trigram.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrigramFindUniqueArgs>(args: SelectSubset<T, TrigramFindUniqueArgs<ExtArgs>>): Prisma__TrigramClient<$Result.GetResult<Prisma.$TrigramPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trigram that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrigramFindUniqueOrThrowArgs} args - Arguments to find a Trigram
     * @example
     * // Get one Trigram
     * const trigram = await prisma.trigram.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrigramFindUniqueOrThrowArgs>(args: SelectSubset<T, TrigramFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrigramClient<$Result.GetResult<Prisma.$TrigramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigram that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrigramFindFirstArgs} args - Arguments to find a Trigram
     * @example
     * // Get one Trigram
     * const trigram = await prisma.trigram.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrigramFindFirstArgs>(args?: SelectSubset<T, TrigramFindFirstArgs<ExtArgs>>): Prisma__TrigramClient<$Result.GetResult<Prisma.$TrigramPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigram that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrigramFindFirstOrThrowArgs} args - Arguments to find a Trigram
     * @example
     * // Get one Trigram
     * const trigram = await prisma.trigram.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrigramFindFirstOrThrowArgs>(args?: SelectSubset<T, TrigramFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrigramClient<$Result.GetResult<Prisma.$TrigramPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trigrams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrigramFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trigrams
     * const trigrams = await prisma.trigram.findMany()
     * 
     * // Get first 10 Trigrams
     * const trigrams = await prisma.trigram.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trigramWithIdOnly = await prisma.trigram.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrigramFindManyArgs>(args?: SelectSubset<T, TrigramFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrigramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trigram.
     * @param {TrigramCreateArgs} args - Arguments to create a Trigram.
     * @example
     * // Create one Trigram
     * const Trigram = await prisma.trigram.create({
     *   data: {
     *     // ... data to create a Trigram
     *   }
     * })
     * 
     */
    create<T extends TrigramCreateArgs>(args: SelectSubset<T, TrigramCreateArgs<ExtArgs>>): Prisma__TrigramClient<$Result.GetResult<Prisma.$TrigramPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trigrams.
     * @param {TrigramCreateManyArgs} args - Arguments to create many Trigrams.
     * @example
     * // Create many Trigrams
     * const trigram = await prisma.trigram.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrigramCreateManyArgs>(args?: SelectSubset<T, TrigramCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trigrams and returns the data saved in the database.
     * @param {TrigramCreateManyAndReturnArgs} args - Arguments to create many Trigrams.
     * @example
     * // Create many Trigrams
     * const trigram = await prisma.trigram.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trigrams and only return the `id`
     * const trigramWithIdOnly = await prisma.trigram.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrigramCreateManyAndReturnArgs>(args?: SelectSubset<T, TrigramCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrigramPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trigram.
     * @param {TrigramDeleteArgs} args - Arguments to delete one Trigram.
     * @example
     * // Delete one Trigram
     * const Trigram = await prisma.trigram.delete({
     *   where: {
     *     // ... filter to delete one Trigram
     *   }
     * })
     * 
     */
    delete<T extends TrigramDeleteArgs>(args: SelectSubset<T, TrigramDeleteArgs<ExtArgs>>): Prisma__TrigramClient<$Result.GetResult<Prisma.$TrigramPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trigram.
     * @param {TrigramUpdateArgs} args - Arguments to update one Trigram.
     * @example
     * // Update one Trigram
     * const trigram = await prisma.trigram.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrigramUpdateArgs>(args: SelectSubset<T, TrigramUpdateArgs<ExtArgs>>): Prisma__TrigramClient<$Result.GetResult<Prisma.$TrigramPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trigrams.
     * @param {TrigramDeleteManyArgs} args - Arguments to filter Trigrams to delete.
     * @example
     * // Delete a few Trigrams
     * const { count } = await prisma.trigram.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrigramDeleteManyArgs>(args?: SelectSubset<T, TrigramDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trigrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrigramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trigrams
     * const trigram = await prisma.trigram.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrigramUpdateManyArgs>(args: SelectSubset<T, TrigramUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trigrams and returns the data updated in the database.
     * @param {TrigramUpdateManyAndReturnArgs} args - Arguments to update many Trigrams.
     * @example
     * // Update many Trigrams
     * const trigram = await prisma.trigram.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trigrams and only return the `id`
     * const trigramWithIdOnly = await prisma.trigram.updateManyAndReturn({
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
    updateManyAndReturn<T extends TrigramUpdateManyAndReturnArgs>(args: SelectSubset<T, TrigramUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrigramPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trigram.
     * @param {TrigramUpsertArgs} args - Arguments to update or create a Trigram.
     * @example
     * // Update or create a Trigram
     * const trigram = await prisma.trigram.upsert({
     *   create: {
     *     // ... data to create a Trigram
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trigram we want to update
     *   }
     * })
     */
    upsert<T extends TrigramUpsertArgs>(args: SelectSubset<T, TrigramUpsertArgs<ExtArgs>>): Prisma__TrigramClient<$Result.GetResult<Prisma.$TrigramPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trigrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrigramCountArgs} args - Arguments to filter Trigrams to count.
     * @example
     * // Count the number of Trigrams
     * const count = await prisma.trigram.count({
     *   where: {
     *     // ... the filter for the Trigrams we want to count
     *   }
     * })
    **/
    count<T extends TrigramCountArgs>(
      args?: Subset<T, TrigramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrigramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trigram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrigramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrigramAggregateArgs>(args: Subset<T, TrigramAggregateArgs>): Prisma.PrismaPromise<GetTrigramAggregateType<T>>

    /**
     * Group by Trigram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrigramGroupByArgs} args - Group by arguments.
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
      T extends TrigramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrigramGroupByArgs['orderBy'] }
        : { orderBy?: TrigramGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrigramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrigramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trigram model
   */
  readonly fields: TrigramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trigram.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrigramClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    upperOf<T extends Trigram$upperOfArgs<ExtArgs> = {}>(args?: Subset<T, Trigram$upperOfArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HexagramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lowerOf<T extends Trigram$lowerOfArgs<ExtArgs> = {}>(args?: Subset<T, Trigram$lowerOfArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HexagramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Trigram model
   */
  interface TrigramFieldRefs {
    readonly id: FieldRef<"Trigram", 'Int'>
    readonly key: FieldRef<"Trigram", 'String'>
    readonly name: FieldRef<"Trigram", 'String'>
    readonly meaning: FieldRef<"Trigram", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Trigram findUnique
   */
  export type TrigramFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigram
     */
    select?: TrigramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigram
     */
    omit?: TrigramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrigramInclude<ExtArgs> | null
    /**
     * Filter, which Trigram to fetch.
     */
    where: TrigramWhereUniqueInput
  }

  /**
   * Trigram findUniqueOrThrow
   */
  export type TrigramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigram
     */
    select?: TrigramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigram
     */
    omit?: TrigramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrigramInclude<ExtArgs> | null
    /**
     * Filter, which Trigram to fetch.
     */
    where: TrigramWhereUniqueInput
  }

  /**
   * Trigram findFirst
   */
  export type TrigramFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigram
     */
    select?: TrigramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigram
     */
    omit?: TrigramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrigramInclude<ExtArgs> | null
    /**
     * Filter, which Trigram to fetch.
     */
    where?: TrigramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trigrams to fetch.
     */
    orderBy?: TrigramOrderByWithRelationInput | TrigramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trigrams.
     */
    cursor?: TrigramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trigrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trigrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trigrams.
     */
    distinct?: TrigramScalarFieldEnum | TrigramScalarFieldEnum[]
  }

  /**
   * Trigram findFirstOrThrow
   */
  export type TrigramFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigram
     */
    select?: TrigramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigram
     */
    omit?: TrigramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrigramInclude<ExtArgs> | null
    /**
     * Filter, which Trigram to fetch.
     */
    where?: TrigramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trigrams to fetch.
     */
    orderBy?: TrigramOrderByWithRelationInput | TrigramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trigrams.
     */
    cursor?: TrigramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trigrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trigrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trigrams.
     */
    distinct?: TrigramScalarFieldEnum | TrigramScalarFieldEnum[]
  }

  /**
   * Trigram findMany
   */
  export type TrigramFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigram
     */
    select?: TrigramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigram
     */
    omit?: TrigramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrigramInclude<ExtArgs> | null
    /**
     * Filter, which Trigrams to fetch.
     */
    where?: TrigramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trigrams to fetch.
     */
    orderBy?: TrigramOrderByWithRelationInput | TrigramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trigrams.
     */
    cursor?: TrigramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trigrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trigrams.
     */
    skip?: number
    distinct?: TrigramScalarFieldEnum | TrigramScalarFieldEnum[]
  }

  /**
   * Trigram create
   */
  export type TrigramCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigram
     */
    select?: TrigramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigram
     */
    omit?: TrigramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrigramInclude<ExtArgs> | null
    /**
     * The data needed to create a Trigram.
     */
    data: XOR<TrigramCreateInput, TrigramUncheckedCreateInput>
  }

  /**
   * Trigram createMany
   */
  export type TrigramCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trigrams.
     */
    data: TrigramCreateManyInput | TrigramCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trigram createManyAndReturn
   */
  export type TrigramCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigram
     */
    select?: TrigramSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trigram
     */
    omit?: TrigramOmit<ExtArgs> | null
    /**
     * The data used to create many Trigrams.
     */
    data: TrigramCreateManyInput | TrigramCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trigram update
   */
  export type TrigramUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigram
     */
    select?: TrigramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigram
     */
    omit?: TrigramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrigramInclude<ExtArgs> | null
    /**
     * The data needed to update a Trigram.
     */
    data: XOR<TrigramUpdateInput, TrigramUncheckedUpdateInput>
    /**
     * Choose, which Trigram to update.
     */
    where: TrigramWhereUniqueInput
  }

  /**
   * Trigram updateMany
   */
  export type TrigramUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trigrams.
     */
    data: XOR<TrigramUpdateManyMutationInput, TrigramUncheckedUpdateManyInput>
    /**
     * Filter which Trigrams to update
     */
    where?: TrigramWhereInput
    /**
     * Limit how many Trigrams to update.
     */
    limit?: number
  }

  /**
   * Trigram updateManyAndReturn
   */
  export type TrigramUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigram
     */
    select?: TrigramSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trigram
     */
    omit?: TrigramOmit<ExtArgs> | null
    /**
     * The data used to update Trigrams.
     */
    data: XOR<TrigramUpdateManyMutationInput, TrigramUncheckedUpdateManyInput>
    /**
     * Filter which Trigrams to update
     */
    where?: TrigramWhereInput
    /**
     * Limit how many Trigrams to update.
     */
    limit?: number
  }

  /**
   * Trigram upsert
   */
  export type TrigramUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigram
     */
    select?: TrigramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigram
     */
    omit?: TrigramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrigramInclude<ExtArgs> | null
    /**
     * The filter to search for the Trigram to update in case it exists.
     */
    where: TrigramWhereUniqueInput
    /**
     * In case the Trigram found by the `where` argument doesn't exist, create a new Trigram with this data.
     */
    create: XOR<TrigramCreateInput, TrigramUncheckedCreateInput>
    /**
     * In case the Trigram was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrigramUpdateInput, TrigramUncheckedUpdateInput>
  }

  /**
   * Trigram delete
   */
  export type TrigramDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigram
     */
    select?: TrigramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigram
     */
    omit?: TrigramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrigramInclude<ExtArgs> | null
    /**
     * Filter which Trigram to delete.
     */
    where: TrigramWhereUniqueInput
  }

  /**
   * Trigram deleteMany
   */
  export type TrigramDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trigrams to delete
     */
    where?: TrigramWhereInput
    /**
     * Limit how many Trigrams to delete.
     */
    limit?: number
  }

  /**
   * Trigram.upperOf
   */
  export type Trigram$upperOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hexagram
     */
    select?: HexagramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hexagram
     */
    omit?: HexagramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HexagramInclude<ExtArgs> | null
    where?: HexagramWhereInput
    orderBy?: HexagramOrderByWithRelationInput | HexagramOrderByWithRelationInput[]
    cursor?: HexagramWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HexagramScalarFieldEnum | HexagramScalarFieldEnum[]
  }

  /**
   * Trigram.lowerOf
   */
  export type Trigram$lowerOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hexagram
     */
    select?: HexagramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hexagram
     */
    omit?: HexagramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HexagramInclude<ExtArgs> | null
    where?: HexagramWhereInput
    orderBy?: HexagramOrderByWithRelationInput | HexagramOrderByWithRelationInput[]
    cursor?: HexagramWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HexagramScalarFieldEnum | HexagramScalarFieldEnum[]
  }

  /**
   * Trigram without action
   */
  export type TrigramDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigram
     */
    select?: TrigramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigram
     */
    omit?: TrigramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrigramInclude<ExtArgs> | null
  }


  /**
   * Model Hexagram
   */

  export type AggregateHexagram = {
    _count: HexagramCountAggregateOutputType | null
    _avg: HexagramAvgAggregateOutputType | null
    _sum: HexagramSumAggregateOutputType | null
    _min: HexagramMinAggregateOutputType | null
    _max: HexagramMaxAggregateOutputType | null
  }

  export type HexagramAvgAggregateOutputType = {
    id: number | null
    upperTrigramId: number | null
    lowerTrigramId: number | null
  }

  export type HexagramSumAggregateOutputType = {
    id: number | null
    upperTrigramId: number | null
    lowerTrigramId: number | null
  }

  export type HexagramMinAggregateOutputType = {
    id: number | null
    key: string | null
    slug: string | null
    name: string | null
    judgment: string | null
    imageText: string | null
    comment: string | null
    footnote: string | null
    upperTrigramId: number | null
    lowerTrigramId: number | null
  }

  export type HexagramMaxAggregateOutputType = {
    id: number | null
    key: string | null
    slug: string | null
    name: string | null
    judgment: string | null
    imageText: string | null
    comment: string | null
    footnote: string | null
    upperTrigramId: number | null
    lowerTrigramId: number | null
  }

  export type HexagramCountAggregateOutputType = {
    id: number
    key: number
    slug: number
    name: number
    judgment: number
    imageText: number
    comment: number
    footnote: number
    tags: number
    upperTrigramId: number
    lowerTrigramId: number
    _all: number
  }


  export type HexagramAvgAggregateInputType = {
    id?: true
    upperTrigramId?: true
    lowerTrigramId?: true
  }

  export type HexagramSumAggregateInputType = {
    id?: true
    upperTrigramId?: true
    lowerTrigramId?: true
  }

  export type HexagramMinAggregateInputType = {
    id?: true
    key?: true
    slug?: true
    name?: true
    judgment?: true
    imageText?: true
    comment?: true
    footnote?: true
    upperTrigramId?: true
    lowerTrigramId?: true
  }

  export type HexagramMaxAggregateInputType = {
    id?: true
    key?: true
    slug?: true
    name?: true
    judgment?: true
    imageText?: true
    comment?: true
    footnote?: true
    upperTrigramId?: true
    lowerTrigramId?: true
  }

  export type HexagramCountAggregateInputType = {
    id?: true
    key?: true
    slug?: true
    name?: true
    judgment?: true
    imageText?: true
    comment?: true
    footnote?: true
    tags?: true
    upperTrigramId?: true
    lowerTrigramId?: true
    _all?: true
  }

  export type HexagramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hexagram to aggregate.
     */
    where?: HexagramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hexagrams to fetch.
     */
    orderBy?: HexagramOrderByWithRelationInput | HexagramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HexagramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hexagrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hexagrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hexagrams
    **/
    _count?: true | HexagramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HexagramAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HexagramSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HexagramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HexagramMaxAggregateInputType
  }

  export type GetHexagramAggregateType<T extends HexagramAggregateArgs> = {
        [P in keyof T & keyof AggregateHexagram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHexagram[P]>
      : GetScalarType<T[P], AggregateHexagram[P]>
  }




  export type HexagramGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HexagramWhereInput
    orderBy?: HexagramOrderByWithAggregationInput | HexagramOrderByWithAggregationInput[]
    by: HexagramScalarFieldEnum[] | HexagramScalarFieldEnum
    having?: HexagramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HexagramCountAggregateInputType | true
    _avg?: HexagramAvgAggregateInputType
    _sum?: HexagramSumAggregateInputType
    _min?: HexagramMinAggregateInputType
    _max?: HexagramMaxAggregateInputType
  }

  export type HexagramGroupByOutputType = {
    id: number
    key: string
    slug: string
    name: string
    judgment: string
    imageText: string | null
    comment: string | null
    footnote: string | null
    tags: string[]
    upperTrigramId: number
    lowerTrigramId: number
    _count: HexagramCountAggregateOutputType | null
    _avg: HexagramAvgAggregateOutputType | null
    _sum: HexagramSumAggregateOutputType | null
    _min: HexagramMinAggregateOutputType | null
    _max: HexagramMaxAggregateOutputType | null
  }

  type GetHexagramGroupByPayload<T extends HexagramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HexagramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HexagramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HexagramGroupByOutputType[P]>
            : GetScalarType<T[P], HexagramGroupByOutputType[P]>
        }
      >
    >


  export type HexagramSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    slug?: boolean
    name?: boolean
    judgment?: boolean
    imageText?: boolean
    comment?: boolean
    footnote?: boolean
    tags?: boolean
    upperTrigramId?: boolean
    lowerTrigramId?: boolean
    upperTrigram?: boolean | TrigramDefaultArgs<ExtArgs>
    lowerTrigram?: boolean | TrigramDefaultArgs<ExtArgs>
    lines?: boolean | Hexagram$linesArgs<ExtArgs>
    baseForReadings?: boolean | Hexagram$baseForReadingsArgs<ExtArgs>
    resultForReadings?: boolean | Hexagram$resultForReadingsArgs<ExtArgs>
    _count?: boolean | HexagramCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hexagram"]>

  export type HexagramSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    slug?: boolean
    name?: boolean
    judgment?: boolean
    imageText?: boolean
    comment?: boolean
    footnote?: boolean
    tags?: boolean
    upperTrigramId?: boolean
    lowerTrigramId?: boolean
    upperTrigram?: boolean | TrigramDefaultArgs<ExtArgs>
    lowerTrigram?: boolean | TrigramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hexagram"]>

  export type HexagramSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    slug?: boolean
    name?: boolean
    judgment?: boolean
    imageText?: boolean
    comment?: boolean
    footnote?: boolean
    tags?: boolean
    upperTrigramId?: boolean
    lowerTrigramId?: boolean
    upperTrigram?: boolean | TrigramDefaultArgs<ExtArgs>
    lowerTrigram?: boolean | TrigramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hexagram"]>

  export type HexagramSelectScalar = {
    id?: boolean
    key?: boolean
    slug?: boolean
    name?: boolean
    judgment?: boolean
    imageText?: boolean
    comment?: boolean
    footnote?: boolean
    tags?: boolean
    upperTrigramId?: boolean
    lowerTrigramId?: boolean
  }

  export type HexagramOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "slug" | "name" | "judgment" | "imageText" | "comment" | "footnote" | "tags" | "upperTrigramId" | "lowerTrigramId", ExtArgs["result"]["hexagram"]>
  export type HexagramInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    upperTrigram?: boolean | TrigramDefaultArgs<ExtArgs>
    lowerTrigram?: boolean | TrigramDefaultArgs<ExtArgs>
    lines?: boolean | Hexagram$linesArgs<ExtArgs>
    baseForReadings?: boolean | Hexagram$baseForReadingsArgs<ExtArgs>
    resultForReadings?: boolean | Hexagram$resultForReadingsArgs<ExtArgs>
    _count?: boolean | HexagramCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HexagramIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    upperTrigram?: boolean | TrigramDefaultArgs<ExtArgs>
    lowerTrigram?: boolean | TrigramDefaultArgs<ExtArgs>
  }
  export type HexagramIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    upperTrigram?: boolean | TrigramDefaultArgs<ExtArgs>
    lowerTrigram?: boolean | TrigramDefaultArgs<ExtArgs>
  }

  export type $HexagramPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hexagram"
    objects: {
      upperTrigram: Prisma.$TrigramPayload<ExtArgs>
      lowerTrigram: Prisma.$TrigramPayload<ExtArgs>
      lines: Prisma.$LinePayload<ExtArgs>[]
      baseForReadings: Prisma.$ReadingPayload<ExtArgs>[]
      resultForReadings: Prisma.$ReadingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      key: string
      slug: string
      name: string
      judgment: string
      imageText: string | null
      comment: string | null
      footnote: string | null
      tags: string[]
      upperTrigramId: number
      lowerTrigramId: number
    }, ExtArgs["result"]["hexagram"]>
    composites: {}
  }

  type HexagramGetPayload<S extends boolean | null | undefined | HexagramDefaultArgs> = $Result.GetResult<Prisma.$HexagramPayload, S>

  type HexagramCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HexagramFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HexagramCountAggregateInputType | true
    }

  export interface HexagramDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hexagram'], meta: { name: 'Hexagram' } }
    /**
     * Find zero or one Hexagram that matches the filter.
     * @param {HexagramFindUniqueArgs} args - Arguments to find a Hexagram
     * @example
     * // Get one Hexagram
     * const hexagram = await prisma.hexagram.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HexagramFindUniqueArgs>(args: SelectSubset<T, HexagramFindUniqueArgs<ExtArgs>>): Prisma__HexagramClient<$Result.GetResult<Prisma.$HexagramPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hexagram that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HexagramFindUniqueOrThrowArgs} args - Arguments to find a Hexagram
     * @example
     * // Get one Hexagram
     * const hexagram = await prisma.hexagram.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HexagramFindUniqueOrThrowArgs>(args: SelectSubset<T, HexagramFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HexagramClient<$Result.GetResult<Prisma.$HexagramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hexagram that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HexagramFindFirstArgs} args - Arguments to find a Hexagram
     * @example
     * // Get one Hexagram
     * const hexagram = await prisma.hexagram.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HexagramFindFirstArgs>(args?: SelectSubset<T, HexagramFindFirstArgs<ExtArgs>>): Prisma__HexagramClient<$Result.GetResult<Prisma.$HexagramPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hexagram that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HexagramFindFirstOrThrowArgs} args - Arguments to find a Hexagram
     * @example
     * // Get one Hexagram
     * const hexagram = await prisma.hexagram.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HexagramFindFirstOrThrowArgs>(args?: SelectSubset<T, HexagramFindFirstOrThrowArgs<ExtArgs>>): Prisma__HexagramClient<$Result.GetResult<Prisma.$HexagramPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hexagrams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HexagramFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hexagrams
     * const hexagrams = await prisma.hexagram.findMany()
     * 
     * // Get first 10 Hexagrams
     * const hexagrams = await prisma.hexagram.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hexagramWithIdOnly = await prisma.hexagram.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HexagramFindManyArgs>(args?: SelectSubset<T, HexagramFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HexagramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hexagram.
     * @param {HexagramCreateArgs} args - Arguments to create a Hexagram.
     * @example
     * // Create one Hexagram
     * const Hexagram = await prisma.hexagram.create({
     *   data: {
     *     // ... data to create a Hexagram
     *   }
     * })
     * 
     */
    create<T extends HexagramCreateArgs>(args: SelectSubset<T, HexagramCreateArgs<ExtArgs>>): Prisma__HexagramClient<$Result.GetResult<Prisma.$HexagramPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hexagrams.
     * @param {HexagramCreateManyArgs} args - Arguments to create many Hexagrams.
     * @example
     * // Create many Hexagrams
     * const hexagram = await prisma.hexagram.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HexagramCreateManyArgs>(args?: SelectSubset<T, HexagramCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hexagrams and returns the data saved in the database.
     * @param {HexagramCreateManyAndReturnArgs} args - Arguments to create many Hexagrams.
     * @example
     * // Create many Hexagrams
     * const hexagram = await prisma.hexagram.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hexagrams and only return the `id`
     * const hexagramWithIdOnly = await prisma.hexagram.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HexagramCreateManyAndReturnArgs>(args?: SelectSubset<T, HexagramCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HexagramPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hexagram.
     * @param {HexagramDeleteArgs} args - Arguments to delete one Hexagram.
     * @example
     * // Delete one Hexagram
     * const Hexagram = await prisma.hexagram.delete({
     *   where: {
     *     // ... filter to delete one Hexagram
     *   }
     * })
     * 
     */
    delete<T extends HexagramDeleteArgs>(args: SelectSubset<T, HexagramDeleteArgs<ExtArgs>>): Prisma__HexagramClient<$Result.GetResult<Prisma.$HexagramPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hexagram.
     * @param {HexagramUpdateArgs} args - Arguments to update one Hexagram.
     * @example
     * // Update one Hexagram
     * const hexagram = await prisma.hexagram.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HexagramUpdateArgs>(args: SelectSubset<T, HexagramUpdateArgs<ExtArgs>>): Prisma__HexagramClient<$Result.GetResult<Prisma.$HexagramPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hexagrams.
     * @param {HexagramDeleteManyArgs} args - Arguments to filter Hexagrams to delete.
     * @example
     * // Delete a few Hexagrams
     * const { count } = await prisma.hexagram.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HexagramDeleteManyArgs>(args?: SelectSubset<T, HexagramDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hexagrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HexagramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hexagrams
     * const hexagram = await prisma.hexagram.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HexagramUpdateManyArgs>(args: SelectSubset<T, HexagramUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hexagrams and returns the data updated in the database.
     * @param {HexagramUpdateManyAndReturnArgs} args - Arguments to update many Hexagrams.
     * @example
     * // Update many Hexagrams
     * const hexagram = await prisma.hexagram.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hexagrams and only return the `id`
     * const hexagramWithIdOnly = await prisma.hexagram.updateManyAndReturn({
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
    updateManyAndReturn<T extends HexagramUpdateManyAndReturnArgs>(args: SelectSubset<T, HexagramUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HexagramPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hexagram.
     * @param {HexagramUpsertArgs} args - Arguments to update or create a Hexagram.
     * @example
     * // Update or create a Hexagram
     * const hexagram = await prisma.hexagram.upsert({
     *   create: {
     *     // ... data to create a Hexagram
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hexagram we want to update
     *   }
     * })
     */
    upsert<T extends HexagramUpsertArgs>(args: SelectSubset<T, HexagramUpsertArgs<ExtArgs>>): Prisma__HexagramClient<$Result.GetResult<Prisma.$HexagramPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hexagrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HexagramCountArgs} args - Arguments to filter Hexagrams to count.
     * @example
     * // Count the number of Hexagrams
     * const count = await prisma.hexagram.count({
     *   where: {
     *     // ... the filter for the Hexagrams we want to count
     *   }
     * })
    **/
    count<T extends HexagramCountArgs>(
      args?: Subset<T, HexagramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HexagramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hexagram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HexagramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HexagramAggregateArgs>(args: Subset<T, HexagramAggregateArgs>): Prisma.PrismaPromise<GetHexagramAggregateType<T>>

    /**
     * Group by Hexagram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HexagramGroupByArgs} args - Group by arguments.
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
      T extends HexagramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HexagramGroupByArgs['orderBy'] }
        : { orderBy?: HexagramGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HexagramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHexagramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hexagram model
   */
  readonly fields: HexagramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hexagram.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HexagramClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    upperTrigram<T extends TrigramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrigramDefaultArgs<ExtArgs>>): Prisma__TrigramClient<$Result.GetResult<Prisma.$TrigramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lowerTrigram<T extends TrigramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrigramDefaultArgs<ExtArgs>>): Prisma__TrigramClient<$Result.GetResult<Prisma.$TrigramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lines<T extends Hexagram$linesArgs<ExtArgs> = {}>(args?: Subset<T, Hexagram$linesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    baseForReadings<T extends Hexagram$baseForReadingsArgs<ExtArgs> = {}>(args?: Subset<T, Hexagram$baseForReadingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resultForReadings<T extends Hexagram$resultForReadingsArgs<ExtArgs> = {}>(args?: Subset<T, Hexagram$resultForReadingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Hexagram model
   */
  interface HexagramFieldRefs {
    readonly id: FieldRef<"Hexagram", 'Int'>
    readonly key: FieldRef<"Hexagram", 'String'>
    readonly slug: FieldRef<"Hexagram", 'String'>
    readonly name: FieldRef<"Hexagram", 'String'>
    readonly judgment: FieldRef<"Hexagram", 'String'>
    readonly imageText: FieldRef<"Hexagram", 'String'>
    readonly comment: FieldRef<"Hexagram", 'String'>
    readonly footnote: FieldRef<"Hexagram", 'String'>
    readonly tags: FieldRef<"Hexagram", 'String[]'>
    readonly upperTrigramId: FieldRef<"Hexagram", 'Int'>
    readonly lowerTrigramId: FieldRef<"Hexagram", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Hexagram findUnique
   */
  export type HexagramFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hexagram
     */
    select?: HexagramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hexagram
     */
    omit?: HexagramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HexagramInclude<ExtArgs> | null
    /**
     * Filter, which Hexagram to fetch.
     */
    where: HexagramWhereUniqueInput
  }

  /**
   * Hexagram findUniqueOrThrow
   */
  export type HexagramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hexagram
     */
    select?: HexagramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hexagram
     */
    omit?: HexagramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HexagramInclude<ExtArgs> | null
    /**
     * Filter, which Hexagram to fetch.
     */
    where: HexagramWhereUniqueInput
  }

  /**
   * Hexagram findFirst
   */
  export type HexagramFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hexagram
     */
    select?: HexagramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hexagram
     */
    omit?: HexagramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HexagramInclude<ExtArgs> | null
    /**
     * Filter, which Hexagram to fetch.
     */
    where?: HexagramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hexagrams to fetch.
     */
    orderBy?: HexagramOrderByWithRelationInput | HexagramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hexagrams.
     */
    cursor?: HexagramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hexagrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hexagrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hexagrams.
     */
    distinct?: HexagramScalarFieldEnum | HexagramScalarFieldEnum[]
  }

  /**
   * Hexagram findFirstOrThrow
   */
  export type HexagramFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hexagram
     */
    select?: HexagramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hexagram
     */
    omit?: HexagramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HexagramInclude<ExtArgs> | null
    /**
     * Filter, which Hexagram to fetch.
     */
    where?: HexagramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hexagrams to fetch.
     */
    orderBy?: HexagramOrderByWithRelationInput | HexagramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hexagrams.
     */
    cursor?: HexagramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hexagrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hexagrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hexagrams.
     */
    distinct?: HexagramScalarFieldEnum | HexagramScalarFieldEnum[]
  }

  /**
   * Hexagram findMany
   */
  export type HexagramFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hexagram
     */
    select?: HexagramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hexagram
     */
    omit?: HexagramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HexagramInclude<ExtArgs> | null
    /**
     * Filter, which Hexagrams to fetch.
     */
    where?: HexagramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hexagrams to fetch.
     */
    orderBy?: HexagramOrderByWithRelationInput | HexagramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hexagrams.
     */
    cursor?: HexagramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hexagrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hexagrams.
     */
    skip?: number
    distinct?: HexagramScalarFieldEnum | HexagramScalarFieldEnum[]
  }

  /**
   * Hexagram create
   */
  export type HexagramCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hexagram
     */
    select?: HexagramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hexagram
     */
    omit?: HexagramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HexagramInclude<ExtArgs> | null
    /**
     * The data needed to create a Hexagram.
     */
    data: XOR<HexagramCreateInput, HexagramUncheckedCreateInput>
  }

  /**
   * Hexagram createMany
   */
  export type HexagramCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hexagrams.
     */
    data: HexagramCreateManyInput | HexagramCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hexagram createManyAndReturn
   */
  export type HexagramCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hexagram
     */
    select?: HexagramSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hexagram
     */
    omit?: HexagramOmit<ExtArgs> | null
    /**
     * The data used to create many Hexagrams.
     */
    data: HexagramCreateManyInput | HexagramCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HexagramIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hexagram update
   */
  export type HexagramUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hexagram
     */
    select?: HexagramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hexagram
     */
    omit?: HexagramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HexagramInclude<ExtArgs> | null
    /**
     * The data needed to update a Hexagram.
     */
    data: XOR<HexagramUpdateInput, HexagramUncheckedUpdateInput>
    /**
     * Choose, which Hexagram to update.
     */
    where: HexagramWhereUniqueInput
  }

  /**
   * Hexagram updateMany
   */
  export type HexagramUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hexagrams.
     */
    data: XOR<HexagramUpdateManyMutationInput, HexagramUncheckedUpdateManyInput>
    /**
     * Filter which Hexagrams to update
     */
    where?: HexagramWhereInput
    /**
     * Limit how many Hexagrams to update.
     */
    limit?: number
  }

  /**
   * Hexagram updateManyAndReturn
   */
  export type HexagramUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hexagram
     */
    select?: HexagramSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hexagram
     */
    omit?: HexagramOmit<ExtArgs> | null
    /**
     * The data used to update Hexagrams.
     */
    data: XOR<HexagramUpdateManyMutationInput, HexagramUncheckedUpdateManyInput>
    /**
     * Filter which Hexagrams to update
     */
    where?: HexagramWhereInput
    /**
     * Limit how many Hexagrams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HexagramIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hexagram upsert
   */
  export type HexagramUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hexagram
     */
    select?: HexagramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hexagram
     */
    omit?: HexagramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HexagramInclude<ExtArgs> | null
    /**
     * The filter to search for the Hexagram to update in case it exists.
     */
    where: HexagramWhereUniqueInput
    /**
     * In case the Hexagram found by the `where` argument doesn't exist, create a new Hexagram with this data.
     */
    create: XOR<HexagramCreateInput, HexagramUncheckedCreateInput>
    /**
     * In case the Hexagram was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HexagramUpdateInput, HexagramUncheckedUpdateInput>
  }

  /**
   * Hexagram delete
   */
  export type HexagramDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hexagram
     */
    select?: HexagramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hexagram
     */
    omit?: HexagramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HexagramInclude<ExtArgs> | null
    /**
     * Filter which Hexagram to delete.
     */
    where: HexagramWhereUniqueInput
  }

  /**
   * Hexagram deleteMany
   */
  export type HexagramDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hexagrams to delete
     */
    where?: HexagramWhereInput
    /**
     * Limit how many Hexagrams to delete.
     */
    limit?: number
  }

  /**
   * Hexagram.lines
   */
  export type Hexagram$linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    where?: LineWhereInput
    orderBy?: LineOrderByWithRelationInput | LineOrderByWithRelationInput[]
    cursor?: LineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LineScalarFieldEnum | LineScalarFieldEnum[]
  }

  /**
   * Hexagram.baseForReadings
   */
  export type Hexagram$baseForReadingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reading
     */
    omit?: ReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    where?: ReadingWhereInput
    orderBy?: ReadingOrderByWithRelationInput | ReadingOrderByWithRelationInput[]
    cursor?: ReadingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReadingScalarFieldEnum | ReadingScalarFieldEnum[]
  }

  /**
   * Hexagram.resultForReadings
   */
  export type Hexagram$resultForReadingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reading
     */
    omit?: ReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    where?: ReadingWhereInput
    orderBy?: ReadingOrderByWithRelationInput | ReadingOrderByWithRelationInput[]
    cursor?: ReadingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReadingScalarFieldEnum | ReadingScalarFieldEnum[]
  }

  /**
   * Hexagram without action
   */
  export type HexagramDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hexagram
     */
    select?: HexagramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hexagram
     */
    omit?: HexagramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HexagramInclude<ExtArgs> | null
  }


  /**
   * Model Line
   */

  export type AggregateLine = {
    _count: LineCountAggregateOutputType | null
    _avg: LineAvgAggregateOutputType | null
    _sum: LineSumAggregateOutputType | null
    _min: LineMinAggregateOutputType | null
    _max: LineMaxAggregateOutputType | null
  }

  export type LineAvgAggregateOutputType = {
    id: number | null
    hexagramId: number | null
    number: number | null
  }

  export type LineSumAggregateOutputType = {
    id: number | null
    hexagramId: number | null
    number: number | null
  }

  export type LineMinAggregateOutputType = {
    id: number | null
    hexagramId: number | null
    number: number | null
    text: string | null
  }

  export type LineMaxAggregateOutputType = {
    id: number | null
    hexagramId: number | null
    number: number | null
    text: string | null
  }

  export type LineCountAggregateOutputType = {
    id: number
    hexagramId: number
    number: number
    text: number
    _all: number
  }


  export type LineAvgAggregateInputType = {
    id?: true
    hexagramId?: true
    number?: true
  }

  export type LineSumAggregateInputType = {
    id?: true
    hexagramId?: true
    number?: true
  }

  export type LineMinAggregateInputType = {
    id?: true
    hexagramId?: true
    number?: true
    text?: true
  }

  export type LineMaxAggregateInputType = {
    id?: true
    hexagramId?: true
    number?: true
    text?: true
  }

  export type LineCountAggregateInputType = {
    id?: true
    hexagramId?: true
    number?: true
    text?: true
    _all?: true
  }

  export type LineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Line to aggregate.
     */
    where?: LineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lines to fetch.
     */
    orderBy?: LineOrderByWithRelationInput | LineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lines
    **/
    _count?: true | LineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LineMaxAggregateInputType
  }

  export type GetLineAggregateType<T extends LineAggregateArgs> = {
        [P in keyof T & keyof AggregateLine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLine[P]>
      : GetScalarType<T[P], AggregateLine[P]>
  }




  export type LineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LineWhereInput
    orderBy?: LineOrderByWithAggregationInput | LineOrderByWithAggregationInput[]
    by: LineScalarFieldEnum[] | LineScalarFieldEnum
    having?: LineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LineCountAggregateInputType | true
    _avg?: LineAvgAggregateInputType
    _sum?: LineSumAggregateInputType
    _min?: LineMinAggregateInputType
    _max?: LineMaxAggregateInputType
  }

  export type LineGroupByOutputType = {
    id: number
    hexagramId: number
    number: number
    text: string
    _count: LineCountAggregateOutputType | null
    _avg: LineAvgAggregateOutputType | null
    _sum: LineSumAggregateOutputType | null
    _min: LineMinAggregateOutputType | null
    _max: LineMaxAggregateOutputType | null
  }

  type GetLineGroupByPayload<T extends LineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LineGroupByOutputType[P]>
            : GetScalarType<T[P], LineGroupByOutputType[P]>
        }
      >
    >


  export type LineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hexagramId?: boolean
    number?: boolean
    text?: boolean
    Hexagram?: boolean | HexagramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["line"]>

  export type LineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hexagramId?: boolean
    number?: boolean
    text?: boolean
    Hexagram?: boolean | HexagramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["line"]>

  export type LineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hexagramId?: boolean
    number?: boolean
    text?: boolean
    Hexagram?: boolean | HexagramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["line"]>

  export type LineSelectScalar = {
    id?: boolean
    hexagramId?: boolean
    number?: boolean
    text?: boolean
  }

  export type LineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hexagramId" | "number" | "text", ExtArgs["result"]["line"]>
  export type LineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Hexagram?: boolean | HexagramDefaultArgs<ExtArgs>
  }
  export type LineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Hexagram?: boolean | HexagramDefaultArgs<ExtArgs>
  }
  export type LineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Hexagram?: boolean | HexagramDefaultArgs<ExtArgs>
  }

  export type $LinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Line"
    objects: {
      Hexagram: Prisma.$HexagramPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hexagramId: number
      number: number
      text: string
    }, ExtArgs["result"]["line"]>
    composites: {}
  }

  type LineGetPayload<S extends boolean | null | undefined | LineDefaultArgs> = $Result.GetResult<Prisma.$LinePayload, S>

  type LineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LineCountAggregateInputType | true
    }

  export interface LineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Line'], meta: { name: 'Line' } }
    /**
     * Find zero or one Line that matches the filter.
     * @param {LineFindUniqueArgs} args - Arguments to find a Line
     * @example
     * // Get one Line
     * const line = await prisma.line.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LineFindUniqueArgs>(args: SelectSubset<T, LineFindUniqueArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Line that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LineFindUniqueOrThrowArgs} args - Arguments to find a Line
     * @example
     * // Get one Line
     * const line = await prisma.line.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LineFindUniqueOrThrowArgs>(args: SelectSubset<T, LineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Line that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineFindFirstArgs} args - Arguments to find a Line
     * @example
     * // Get one Line
     * const line = await prisma.line.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LineFindFirstArgs>(args?: SelectSubset<T, LineFindFirstArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Line that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineFindFirstOrThrowArgs} args - Arguments to find a Line
     * @example
     * // Get one Line
     * const line = await prisma.line.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LineFindFirstOrThrowArgs>(args?: SelectSubset<T, LineFindFirstOrThrowArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lines
     * const lines = await prisma.line.findMany()
     * 
     * // Get first 10 Lines
     * const lines = await prisma.line.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lineWithIdOnly = await prisma.line.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LineFindManyArgs>(args?: SelectSubset<T, LineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Line.
     * @param {LineCreateArgs} args - Arguments to create a Line.
     * @example
     * // Create one Line
     * const Line = await prisma.line.create({
     *   data: {
     *     // ... data to create a Line
     *   }
     * })
     * 
     */
    create<T extends LineCreateArgs>(args: SelectSubset<T, LineCreateArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lines.
     * @param {LineCreateManyArgs} args - Arguments to create many Lines.
     * @example
     * // Create many Lines
     * const line = await prisma.line.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LineCreateManyArgs>(args?: SelectSubset<T, LineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lines and returns the data saved in the database.
     * @param {LineCreateManyAndReturnArgs} args - Arguments to create many Lines.
     * @example
     * // Create many Lines
     * const line = await prisma.line.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lines and only return the `id`
     * const lineWithIdOnly = await prisma.line.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LineCreateManyAndReturnArgs>(args?: SelectSubset<T, LineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Line.
     * @param {LineDeleteArgs} args - Arguments to delete one Line.
     * @example
     * // Delete one Line
     * const Line = await prisma.line.delete({
     *   where: {
     *     // ... filter to delete one Line
     *   }
     * })
     * 
     */
    delete<T extends LineDeleteArgs>(args: SelectSubset<T, LineDeleteArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Line.
     * @param {LineUpdateArgs} args - Arguments to update one Line.
     * @example
     * // Update one Line
     * const line = await prisma.line.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LineUpdateArgs>(args: SelectSubset<T, LineUpdateArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lines.
     * @param {LineDeleteManyArgs} args - Arguments to filter Lines to delete.
     * @example
     * // Delete a few Lines
     * const { count } = await prisma.line.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LineDeleteManyArgs>(args?: SelectSubset<T, LineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lines
     * const line = await prisma.line.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LineUpdateManyArgs>(args: SelectSubset<T, LineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lines and returns the data updated in the database.
     * @param {LineUpdateManyAndReturnArgs} args - Arguments to update many Lines.
     * @example
     * // Update many Lines
     * const line = await prisma.line.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lines and only return the `id`
     * const lineWithIdOnly = await prisma.line.updateManyAndReturn({
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
    updateManyAndReturn<T extends LineUpdateManyAndReturnArgs>(args: SelectSubset<T, LineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Line.
     * @param {LineUpsertArgs} args - Arguments to update or create a Line.
     * @example
     * // Update or create a Line
     * const line = await prisma.line.upsert({
     *   create: {
     *     // ... data to create a Line
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Line we want to update
     *   }
     * })
     */
    upsert<T extends LineUpsertArgs>(args: SelectSubset<T, LineUpsertArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineCountArgs} args - Arguments to filter Lines to count.
     * @example
     * // Count the number of Lines
     * const count = await prisma.line.count({
     *   where: {
     *     // ... the filter for the Lines we want to count
     *   }
     * })
    **/
    count<T extends LineCountArgs>(
      args?: Subset<T, LineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Line.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LineAggregateArgs>(args: Subset<T, LineAggregateArgs>): Prisma.PrismaPromise<GetLineAggregateType<T>>

    /**
     * Group by Line.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineGroupByArgs} args - Group by arguments.
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
      T extends LineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LineGroupByArgs['orderBy'] }
        : { orderBy?: LineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Line model
   */
  readonly fields: LineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Line.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Hexagram<T extends HexagramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HexagramDefaultArgs<ExtArgs>>): Prisma__HexagramClient<$Result.GetResult<Prisma.$HexagramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Line model
   */
  interface LineFieldRefs {
    readonly id: FieldRef<"Line", 'Int'>
    readonly hexagramId: FieldRef<"Line", 'Int'>
    readonly number: FieldRef<"Line", 'Int'>
    readonly text: FieldRef<"Line", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Line findUnique
   */
  export type LineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter, which Line to fetch.
     */
    where: LineWhereUniqueInput
  }

  /**
   * Line findUniqueOrThrow
   */
  export type LineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter, which Line to fetch.
     */
    where: LineWhereUniqueInput
  }

  /**
   * Line findFirst
   */
  export type LineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter, which Line to fetch.
     */
    where?: LineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lines to fetch.
     */
    orderBy?: LineOrderByWithRelationInput | LineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lines.
     */
    cursor?: LineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lines.
     */
    distinct?: LineScalarFieldEnum | LineScalarFieldEnum[]
  }

  /**
   * Line findFirstOrThrow
   */
  export type LineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter, which Line to fetch.
     */
    where?: LineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lines to fetch.
     */
    orderBy?: LineOrderByWithRelationInput | LineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lines.
     */
    cursor?: LineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lines.
     */
    distinct?: LineScalarFieldEnum | LineScalarFieldEnum[]
  }

  /**
   * Line findMany
   */
  export type LineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter, which Lines to fetch.
     */
    where?: LineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lines to fetch.
     */
    orderBy?: LineOrderByWithRelationInput | LineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lines.
     */
    cursor?: LineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lines.
     */
    skip?: number
    distinct?: LineScalarFieldEnum | LineScalarFieldEnum[]
  }

  /**
   * Line create
   */
  export type LineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * The data needed to create a Line.
     */
    data: XOR<LineCreateInput, LineUncheckedCreateInput>
  }

  /**
   * Line createMany
   */
  export type LineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lines.
     */
    data: LineCreateManyInput | LineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Line createManyAndReturn
   */
  export type LineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * The data used to create many Lines.
     */
    data: LineCreateManyInput | LineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Line update
   */
  export type LineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * The data needed to update a Line.
     */
    data: XOR<LineUpdateInput, LineUncheckedUpdateInput>
    /**
     * Choose, which Line to update.
     */
    where: LineWhereUniqueInput
  }

  /**
   * Line updateMany
   */
  export type LineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lines.
     */
    data: XOR<LineUpdateManyMutationInput, LineUncheckedUpdateManyInput>
    /**
     * Filter which Lines to update
     */
    where?: LineWhereInput
    /**
     * Limit how many Lines to update.
     */
    limit?: number
  }

  /**
   * Line updateManyAndReturn
   */
  export type LineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * The data used to update Lines.
     */
    data: XOR<LineUpdateManyMutationInput, LineUncheckedUpdateManyInput>
    /**
     * Filter which Lines to update
     */
    where?: LineWhereInput
    /**
     * Limit how many Lines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Line upsert
   */
  export type LineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * The filter to search for the Line to update in case it exists.
     */
    where: LineWhereUniqueInput
    /**
     * In case the Line found by the `where` argument doesn't exist, create a new Line with this data.
     */
    create: XOR<LineCreateInput, LineUncheckedCreateInput>
    /**
     * In case the Line was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LineUpdateInput, LineUncheckedUpdateInput>
  }

  /**
   * Line delete
   */
  export type LineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter which Line to delete.
     */
    where: LineWhereUniqueInput
  }

  /**
   * Line deleteMany
   */
  export type LineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lines to delete
     */
    where?: LineWhereInput
    /**
     * Limit how many Lines to delete.
     */
    limit?: number
  }

  /**
   * Line without action
   */
  export type LineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
  }


  /**
   * Model ContentSource
   */

  export type AggregateContentSource = {
    _count: ContentSourceCountAggregateOutputType | null
    _min: ContentSourceMinAggregateOutputType | null
    _max: ContentSourceMaxAggregateOutputType | null
  }

  export type ContentSourceMinAggregateOutputType = {
    id: string | null
    key: string | null
    version: string | null
    importedAt: Date | null
  }

  export type ContentSourceMaxAggregateOutputType = {
    id: string | null
    key: string | null
    version: string | null
    importedAt: Date | null
  }

  export type ContentSourceCountAggregateOutputType = {
    id: number
    key: number
    payload: number
    version: number
    importedAt: number
    _all: number
  }


  export type ContentSourceMinAggregateInputType = {
    id?: true
    key?: true
    version?: true
    importedAt?: true
  }

  export type ContentSourceMaxAggregateInputType = {
    id?: true
    key?: true
    version?: true
    importedAt?: true
  }

  export type ContentSourceCountAggregateInputType = {
    id?: true
    key?: true
    payload?: true
    version?: true
    importedAt?: true
    _all?: true
  }

  export type ContentSourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentSource to aggregate.
     */
    where?: ContentSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentSources to fetch.
     */
    orderBy?: ContentSourceOrderByWithRelationInput | ContentSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContentSources
    **/
    _count?: true | ContentSourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentSourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentSourceMaxAggregateInputType
  }

  export type GetContentSourceAggregateType<T extends ContentSourceAggregateArgs> = {
        [P in keyof T & keyof AggregateContentSource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContentSource[P]>
      : GetScalarType<T[P], AggregateContentSource[P]>
  }




  export type ContentSourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentSourceWhereInput
    orderBy?: ContentSourceOrderByWithAggregationInput | ContentSourceOrderByWithAggregationInput[]
    by: ContentSourceScalarFieldEnum[] | ContentSourceScalarFieldEnum
    having?: ContentSourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentSourceCountAggregateInputType | true
    _min?: ContentSourceMinAggregateInputType
    _max?: ContentSourceMaxAggregateInputType
  }

  export type ContentSourceGroupByOutputType = {
    id: string
    key: string
    payload: JsonValue
    version: string
    importedAt: Date
    _count: ContentSourceCountAggregateOutputType | null
    _min: ContentSourceMinAggregateOutputType | null
    _max: ContentSourceMaxAggregateOutputType | null
  }

  type GetContentSourceGroupByPayload<T extends ContentSourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentSourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentSourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentSourceGroupByOutputType[P]>
            : GetScalarType<T[P], ContentSourceGroupByOutputType[P]>
        }
      >
    >


  export type ContentSourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    payload?: boolean
    version?: boolean
    importedAt?: boolean
  }, ExtArgs["result"]["contentSource"]>

  export type ContentSourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    payload?: boolean
    version?: boolean
    importedAt?: boolean
  }, ExtArgs["result"]["contentSource"]>

  export type ContentSourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    payload?: boolean
    version?: boolean
    importedAt?: boolean
  }, ExtArgs["result"]["contentSource"]>

  export type ContentSourceSelectScalar = {
    id?: boolean
    key?: boolean
    payload?: boolean
    version?: boolean
    importedAt?: boolean
  }

  export type ContentSourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "payload" | "version" | "importedAt", ExtArgs["result"]["contentSource"]>

  export type $ContentSourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContentSource"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      payload: Prisma.JsonValue
      version: string
      importedAt: Date
    }, ExtArgs["result"]["contentSource"]>
    composites: {}
  }

  type ContentSourceGetPayload<S extends boolean | null | undefined | ContentSourceDefaultArgs> = $Result.GetResult<Prisma.$ContentSourcePayload, S>

  type ContentSourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentSourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentSourceCountAggregateInputType | true
    }

  export interface ContentSourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContentSource'], meta: { name: 'ContentSource' } }
    /**
     * Find zero or one ContentSource that matches the filter.
     * @param {ContentSourceFindUniqueArgs} args - Arguments to find a ContentSource
     * @example
     * // Get one ContentSource
     * const contentSource = await prisma.contentSource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentSourceFindUniqueArgs>(args: SelectSubset<T, ContentSourceFindUniqueArgs<ExtArgs>>): Prisma__ContentSourceClient<$Result.GetResult<Prisma.$ContentSourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContentSource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentSourceFindUniqueOrThrowArgs} args - Arguments to find a ContentSource
     * @example
     * // Get one ContentSource
     * const contentSource = await prisma.contentSource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentSourceFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentSourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentSourceClient<$Result.GetResult<Prisma.$ContentSourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentSource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentSourceFindFirstArgs} args - Arguments to find a ContentSource
     * @example
     * // Get one ContentSource
     * const contentSource = await prisma.contentSource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentSourceFindFirstArgs>(args?: SelectSubset<T, ContentSourceFindFirstArgs<ExtArgs>>): Prisma__ContentSourceClient<$Result.GetResult<Prisma.$ContentSourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentSource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentSourceFindFirstOrThrowArgs} args - Arguments to find a ContentSource
     * @example
     * // Get one ContentSource
     * const contentSource = await prisma.contentSource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentSourceFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentSourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentSourceClient<$Result.GetResult<Prisma.$ContentSourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContentSources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentSourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContentSources
     * const contentSources = await prisma.contentSource.findMany()
     * 
     * // Get first 10 ContentSources
     * const contentSources = await prisma.contentSource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentSourceWithIdOnly = await prisma.contentSource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentSourceFindManyArgs>(args?: SelectSubset<T, ContentSourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentSourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContentSource.
     * @param {ContentSourceCreateArgs} args - Arguments to create a ContentSource.
     * @example
     * // Create one ContentSource
     * const ContentSource = await prisma.contentSource.create({
     *   data: {
     *     // ... data to create a ContentSource
     *   }
     * })
     * 
     */
    create<T extends ContentSourceCreateArgs>(args: SelectSubset<T, ContentSourceCreateArgs<ExtArgs>>): Prisma__ContentSourceClient<$Result.GetResult<Prisma.$ContentSourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContentSources.
     * @param {ContentSourceCreateManyArgs} args - Arguments to create many ContentSources.
     * @example
     * // Create many ContentSources
     * const contentSource = await prisma.contentSource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentSourceCreateManyArgs>(args?: SelectSubset<T, ContentSourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContentSources and returns the data saved in the database.
     * @param {ContentSourceCreateManyAndReturnArgs} args - Arguments to create many ContentSources.
     * @example
     * // Create many ContentSources
     * const contentSource = await prisma.contentSource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContentSources and only return the `id`
     * const contentSourceWithIdOnly = await prisma.contentSource.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentSourceCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentSourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentSourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContentSource.
     * @param {ContentSourceDeleteArgs} args - Arguments to delete one ContentSource.
     * @example
     * // Delete one ContentSource
     * const ContentSource = await prisma.contentSource.delete({
     *   where: {
     *     // ... filter to delete one ContentSource
     *   }
     * })
     * 
     */
    delete<T extends ContentSourceDeleteArgs>(args: SelectSubset<T, ContentSourceDeleteArgs<ExtArgs>>): Prisma__ContentSourceClient<$Result.GetResult<Prisma.$ContentSourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContentSource.
     * @param {ContentSourceUpdateArgs} args - Arguments to update one ContentSource.
     * @example
     * // Update one ContentSource
     * const contentSource = await prisma.contentSource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentSourceUpdateArgs>(args: SelectSubset<T, ContentSourceUpdateArgs<ExtArgs>>): Prisma__ContentSourceClient<$Result.GetResult<Prisma.$ContentSourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContentSources.
     * @param {ContentSourceDeleteManyArgs} args - Arguments to filter ContentSources to delete.
     * @example
     * // Delete a few ContentSources
     * const { count } = await prisma.contentSource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentSourceDeleteManyArgs>(args?: SelectSubset<T, ContentSourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentSourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContentSources
     * const contentSource = await prisma.contentSource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentSourceUpdateManyArgs>(args: SelectSubset<T, ContentSourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentSources and returns the data updated in the database.
     * @param {ContentSourceUpdateManyAndReturnArgs} args - Arguments to update many ContentSources.
     * @example
     * // Update many ContentSources
     * const contentSource = await prisma.contentSource.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContentSources and only return the `id`
     * const contentSourceWithIdOnly = await prisma.contentSource.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContentSourceUpdateManyAndReturnArgs>(args: SelectSubset<T, ContentSourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentSourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContentSource.
     * @param {ContentSourceUpsertArgs} args - Arguments to update or create a ContentSource.
     * @example
     * // Update or create a ContentSource
     * const contentSource = await prisma.contentSource.upsert({
     *   create: {
     *     // ... data to create a ContentSource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContentSource we want to update
     *   }
     * })
     */
    upsert<T extends ContentSourceUpsertArgs>(args: SelectSubset<T, ContentSourceUpsertArgs<ExtArgs>>): Prisma__ContentSourceClient<$Result.GetResult<Prisma.$ContentSourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContentSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentSourceCountArgs} args - Arguments to filter ContentSources to count.
     * @example
     * // Count the number of ContentSources
     * const count = await prisma.contentSource.count({
     *   where: {
     *     // ... the filter for the ContentSources we want to count
     *   }
     * })
    **/
    count<T extends ContentSourceCountArgs>(
      args?: Subset<T, ContentSourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentSourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContentSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentSourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContentSourceAggregateArgs>(args: Subset<T, ContentSourceAggregateArgs>): Prisma.PrismaPromise<GetContentSourceAggregateType<T>>

    /**
     * Group by ContentSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentSourceGroupByArgs} args - Group by arguments.
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
      T extends ContentSourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentSourceGroupByArgs['orderBy'] }
        : { orderBy?: ContentSourceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContentSourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentSourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContentSource model
   */
  readonly fields: ContentSourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContentSource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentSourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ContentSource model
   */
  interface ContentSourceFieldRefs {
    readonly id: FieldRef<"ContentSource", 'String'>
    readonly key: FieldRef<"ContentSource", 'String'>
    readonly payload: FieldRef<"ContentSource", 'Json'>
    readonly version: FieldRef<"ContentSource", 'String'>
    readonly importedAt: FieldRef<"ContentSource", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContentSource findUnique
   */
  export type ContentSourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSource
     */
    select?: ContentSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSource
     */
    omit?: ContentSourceOmit<ExtArgs> | null
    /**
     * Filter, which ContentSource to fetch.
     */
    where: ContentSourceWhereUniqueInput
  }

  /**
   * ContentSource findUniqueOrThrow
   */
  export type ContentSourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSource
     */
    select?: ContentSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSource
     */
    omit?: ContentSourceOmit<ExtArgs> | null
    /**
     * Filter, which ContentSource to fetch.
     */
    where: ContentSourceWhereUniqueInput
  }

  /**
   * ContentSource findFirst
   */
  export type ContentSourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSource
     */
    select?: ContentSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSource
     */
    omit?: ContentSourceOmit<ExtArgs> | null
    /**
     * Filter, which ContentSource to fetch.
     */
    where?: ContentSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentSources to fetch.
     */
    orderBy?: ContentSourceOrderByWithRelationInput | ContentSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentSources.
     */
    cursor?: ContentSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentSources.
     */
    distinct?: ContentSourceScalarFieldEnum | ContentSourceScalarFieldEnum[]
  }

  /**
   * ContentSource findFirstOrThrow
   */
  export type ContentSourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSource
     */
    select?: ContentSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSource
     */
    omit?: ContentSourceOmit<ExtArgs> | null
    /**
     * Filter, which ContentSource to fetch.
     */
    where?: ContentSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentSources to fetch.
     */
    orderBy?: ContentSourceOrderByWithRelationInput | ContentSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentSources.
     */
    cursor?: ContentSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentSources.
     */
    distinct?: ContentSourceScalarFieldEnum | ContentSourceScalarFieldEnum[]
  }

  /**
   * ContentSource findMany
   */
  export type ContentSourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSource
     */
    select?: ContentSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSource
     */
    omit?: ContentSourceOmit<ExtArgs> | null
    /**
     * Filter, which ContentSources to fetch.
     */
    where?: ContentSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentSources to fetch.
     */
    orderBy?: ContentSourceOrderByWithRelationInput | ContentSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContentSources.
     */
    cursor?: ContentSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentSources.
     */
    skip?: number
    distinct?: ContentSourceScalarFieldEnum | ContentSourceScalarFieldEnum[]
  }

  /**
   * ContentSource create
   */
  export type ContentSourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSource
     */
    select?: ContentSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSource
     */
    omit?: ContentSourceOmit<ExtArgs> | null
    /**
     * The data needed to create a ContentSource.
     */
    data: XOR<ContentSourceCreateInput, ContentSourceUncheckedCreateInput>
  }

  /**
   * ContentSource createMany
   */
  export type ContentSourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContentSources.
     */
    data: ContentSourceCreateManyInput | ContentSourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContentSource createManyAndReturn
   */
  export type ContentSourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSource
     */
    select?: ContentSourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSource
     */
    omit?: ContentSourceOmit<ExtArgs> | null
    /**
     * The data used to create many ContentSources.
     */
    data: ContentSourceCreateManyInput | ContentSourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContentSource update
   */
  export type ContentSourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSource
     */
    select?: ContentSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSource
     */
    omit?: ContentSourceOmit<ExtArgs> | null
    /**
     * The data needed to update a ContentSource.
     */
    data: XOR<ContentSourceUpdateInput, ContentSourceUncheckedUpdateInput>
    /**
     * Choose, which ContentSource to update.
     */
    where: ContentSourceWhereUniqueInput
  }

  /**
   * ContentSource updateMany
   */
  export type ContentSourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContentSources.
     */
    data: XOR<ContentSourceUpdateManyMutationInput, ContentSourceUncheckedUpdateManyInput>
    /**
     * Filter which ContentSources to update
     */
    where?: ContentSourceWhereInput
    /**
     * Limit how many ContentSources to update.
     */
    limit?: number
  }

  /**
   * ContentSource updateManyAndReturn
   */
  export type ContentSourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSource
     */
    select?: ContentSourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSource
     */
    omit?: ContentSourceOmit<ExtArgs> | null
    /**
     * The data used to update ContentSources.
     */
    data: XOR<ContentSourceUpdateManyMutationInput, ContentSourceUncheckedUpdateManyInput>
    /**
     * Filter which ContentSources to update
     */
    where?: ContentSourceWhereInput
    /**
     * Limit how many ContentSources to update.
     */
    limit?: number
  }

  /**
   * ContentSource upsert
   */
  export type ContentSourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSource
     */
    select?: ContentSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSource
     */
    omit?: ContentSourceOmit<ExtArgs> | null
    /**
     * The filter to search for the ContentSource to update in case it exists.
     */
    where: ContentSourceWhereUniqueInput
    /**
     * In case the ContentSource found by the `where` argument doesn't exist, create a new ContentSource with this data.
     */
    create: XOR<ContentSourceCreateInput, ContentSourceUncheckedCreateInput>
    /**
     * In case the ContentSource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentSourceUpdateInput, ContentSourceUncheckedUpdateInput>
  }

  /**
   * ContentSource delete
   */
  export type ContentSourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSource
     */
    select?: ContentSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSource
     */
    omit?: ContentSourceOmit<ExtArgs> | null
    /**
     * Filter which ContentSource to delete.
     */
    where: ContentSourceWhereUniqueInput
  }

  /**
   * ContentSource deleteMany
   */
  export type ContentSourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentSources to delete
     */
    where?: ContentSourceWhereInput
    /**
     * Limit how many ContentSources to delete.
     */
    limit?: number
  }

  /**
   * ContentSource without action
   */
  export type ContentSourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSource
     */
    select?: ContentSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSource
     */
    omit?: ContentSourceOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    image: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    image: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    image: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    image: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    createdAt?: boolean
    readings?: boolean | User$readingsArgs<ExtArgs>
    chats?: boolean | User$chatsArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    journal?: boolean | User$journalArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "image" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    readings?: boolean | User$readingsArgs<ExtArgs>
    chats?: boolean | User$chatsArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    journal?: boolean | User$journalArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      readings: Prisma.$ReadingPayload<ExtArgs>[]
      chats: Prisma.$ChatSessionPayload<ExtArgs>[]
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
      journal: Prisma.$JournalEntryPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      image: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    readings<T extends User$readingsArgs<ExtArgs> = {}>(args?: Subset<T, User$readingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chats<T extends User$chatsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends User$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    journal<T extends User$journalArgs<ExtArgs> = {}>(args?: Subset<T, User$journalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.readings
   */
  export type User$readingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reading
     */
    omit?: ReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    where?: ReadingWhereInput
    orderBy?: ReadingOrderByWithRelationInput | ReadingOrderByWithRelationInput[]
    cursor?: ReadingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReadingScalarFieldEnum | ReadingScalarFieldEnum[]
  }

  /**
   * User.chats
   */
  export type User$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    cursor?: ChatSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * User.favorites
   */
  export type User$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * User.journal
   */
  export type User$journalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    where?: JournalEntryWhereInput
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    cursor?: JournalEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JournalEntryScalarFieldEnum | JournalEntryScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
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
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Reading
   */

  export type AggregateReading = {
    _count: ReadingCountAggregateOutputType | null
    _avg: ReadingAvgAggregateOutputType | null
    _sum: ReadingSumAggregateOutputType | null
    _min: ReadingMinAggregateOutputType | null
    _max: ReadingMaxAggregateOutputType | null
  }

  export type ReadingAvgAggregateOutputType = {
    movingLines: number | null
    baseHexagramId: number | null
    resultHexagramId: number | null
  }

  export type ReadingSumAggregateOutputType = {
    movingLines: number[]
    baseHexagramId: number | null
    resultHexagramId: number | null
  }

  export type ReadingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    method: string | null
    seed: string | null
    baseHexagramId: number | null
    resultHexagramId: number | null
    question: string | null
    notes: string | null
  }

  export type ReadingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    method: string | null
    seed: string | null
    baseHexagramId: number | null
    resultHexagramId: number | null
    question: string | null
    notes: string | null
  }

  export type ReadingCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    method: number
    seed: number
    tossesJson: number
    movingLines: number
    baseHexagramId: number
    resultHexagramId: number
    question: number
    notes: number
    _all: number
  }


  export type ReadingAvgAggregateInputType = {
    movingLines?: true
    baseHexagramId?: true
    resultHexagramId?: true
  }

  export type ReadingSumAggregateInputType = {
    movingLines?: true
    baseHexagramId?: true
    resultHexagramId?: true
  }

  export type ReadingMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    method?: true
    seed?: true
    baseHexagramId?: true
    resultHexagramId?: true
    question?: true
    notes?: true
  }

  export type ReadingMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    method?: true
    seed?: true
    baseHexagramId?: true
    resultHexagramId?: true
    question?: true
    notes?: true
  }

  export type ReadingCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    method?: true
    seed?: true
    tossesJson?: true
    movingLines?: true
    baseHexagramId?: true
    resultHexagramId?: true
    question?: true
    notes?: true
    _all?: true
  }

  export type ReadingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reading to aggregate.
     */
    where?: ReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Readings to fetch.
     */
    orderBy?: ReadingOrderByWithRelationInput | ReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Readings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Readings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Readings
    **/
    _count?: true | ReadingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReadingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReadingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReadingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReadingMaxAggregateInputType
  }

  export type GetReadingAggregateType<T extends ReadingAggregateArgs> = {
        [P in keyof T & keyof AggregateReading]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReading[P]>
      : GetScalarType<T[P], AggregateReading[P]>
  }




  export type ReadingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReadingWhereInput
    orderBy?: ReadingOrderByWithAggregationInput | ReadingOrderByWithAggregationInput[]
    by: ReadingScalarFieldEnum[] | ReadingScalarFieldEnum
    having?: ReadingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReadingCountAggregateInputType | true
    _avg?: ReadingAvgAggregateInputType
    _sum?: ReadingSumAggregateInputType
    _min?: ReadingMinAggregateInputType
    _max?: ReadingMaxAggregateInputType
  }

  export type ReadingGroupByOutputType = {
    id: string
    userId: string | null
    createdAt: Date
    method: string
    seed: string | null
    tossesJson: JsonValue
    movingLines: number[]
    baseHexagramId: number
    resultHexagramId: number
    question: string | null
    notes: string | null
    _count: ReadingCountAggregateOutputType | null
    _avg: ReadingAvgAggregateOutputType | null
    _sum: ReadingSumAggregateOutputType | null
    _min: ReadingMinAggregateOutputType | null
    _max: ReadingMaxAggregateOutputType | null
  }

  type GetReadingGroupByPayload<T extends ReadingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReadingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReadingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReadingGroupByOutputType[P]>
            : GetScalarType<T[P], ReadingGroupByOutputType[P]>
        }
      >
    >


  export type ReadingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    method?: boolean
    seed?: boolean
    tossesJson?: boolean
    movingLines?: boolean
    baseHexagramId?: boolean
    resultHexagramId?: boolean
    question?: boolean
    notes?: boolean
    User?: boolean | Reading$UserArgs<ExtArgs>
    baseHexagram?: boolean | HexagramDefaultArgs<ExtArgs>
    resultHexagram?: boolean | HexagramDefaultArgs<ExtArgs>
    chats?: boolean | Reading$chatsArgs<ExtArgs>
    shares?: boolean | Reading$sharesArgs<ExtArgs>
    favorites?: boolean | Reading$favoritesArgs<ExtArgs>
    _count?: boolean | ReadingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reading"]>

  export type ReadingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    method?: boolean
    seed?: boolean
    tossesJson?: boolean
    movingLines?: boolean
    baseHexagramId?: boolean
    resultHexagramId?: boolean
    question?: boolean
    notes?: boolean
    User?: boolean | Reading$UserArgs<ExtArgs>
    baseHexagram?: boolean | HexagramDefaultArgs<ExtArgs>
    resultHexagram?: boolean | HexagramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reading"]>

  export type ReadingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    method?: boolean
    seed?: boolean
    tossesJson?: boolean
    movingLines?: boolean
    baseHexagramId?: boolean
    resultHexagramId?: boolean
    question?: boolean
    notes?: boolean
    User?: boolean | Reading$UserArgs<ExtArgs>
    baseHexagram?: boolean | HexagramDefaultArgs<ExtArgs>
    resultHexagram?: boolean | HexagramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reading"]>

  export type ReadingSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    method?: boolean
    seed?: boolean
    tossesJson?: boolean
    movingLines?: boolean
    baseHexagramId?: boolean
    resultHexagramId?: boolean
    question?: boolean
    notes?: boolean
  }

  export type ReadingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "method" | "seed" | "tossesJson" | "movingLines" | "baseHexagramId" | "resultHexagramId" | "question" | "notes", ExtArgs["result"]["reading"]>
  export type ReadingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Reading$UserArgs<ExtArgs>
    baseHexagram?: boolean | HexagramDefaultArgs<ExtArgs>
    resultHexagram?: boolean | HexagramDefaultArgs<ExtArgs>
    chats?: boolean | Reading$chatsArgs<ExtArgs>
    shares?: boolean | Reading$sharesArgs<ExtArgs>
    favorites?: boolean | Reading$favoritesArgs<ExtArgs>
    _count?: boolean | ReadingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReadingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Reading$UserArgs<ExtArgs>
    baseHexagram?: boolean | HexagramDefaultArgs<ExtArgs>
    resultHexagram?: boolean | HexagramDefaultArgs<ExtArgs>
  }
  export type ReadingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Reading$UserArgs<ExtArgs>
    baseHexagram?: boolean | HexagramDefaultArgs<ExtArgs>
    resultHexagram?: boolean | HexagramDefaultArgs<ExtArgs>
  }

  export type $ReadingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reading"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
      baseHexagram: Prisma.$HexagramPayload<ExtArgs>
      resultHexagram: Prisma.$HexagramPayload<ExtArgs>
      chats: Prisma.$ChatSessionPayload<ExtArgs>[]
      shares: Prisma.$ShareLinkPayload<ExtArgs>[]
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      createdAt: Date
      method: string
      seed: string | null
      tossesJson: Prisma.JsonValue
      movingLines: number[]
      baseHexagramId: number
      resultHexagramId: number
      question: string | null
      notes: string | null
    }, ExtArgs["result"]["reading"]>
    composites: {}
  }

  type ReadingGetPayload<S extends boolean | null | undefined | ReadingDefaultArgs> = $Result.GetResult<Prisma.$ReadingPayload, S>

  type ReadingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReadingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReadingCountAggregateInputType | true
    }

  export interface ReadingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reading'], meta: { name: 'Reading' } }
    /**
     * Find zero or one Reading that matches the filter.
     * @param {ReadingFindUniqueArgs} args - Arguments to find a Reading
     * @example
     * // Get one Reading
     * const reading = await prisma.reading.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReadingFindUniqueArgs>(args: SelectSubset<T, ReadingFindUniqueArgs<ExtArgs>>): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reading that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReadingFindUniqueOrThrowArgs} args - Arguments to find a Reading
     * @example
     * // Get one Reading
     * const reading = await prisma.reading.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReadingFindUniqueOrThrowArgs>(args: SelectSubset<T, ReadingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reading that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingFindFirstArgs} args - Arguments to find a Reading
     * @example
     * // Get one Reading
     * const reading = await prisma.reading.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReadingFindFirstArgs>(args?: SelectSubset<T, ReadingFindFirstArgs<ExtArgs>>): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reading that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingFindFirstOrThrowArgs} args - Arguments to find a Reading
     * @example
     * // Get one Reading
     * const reading = await prisma.reading.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReadingFindFirstOrThrowArgs>(args?: SelectSubset<T, ReadingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Readings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Readings
     * const readings = await prisma.reading.findMany()
     * 
     * // Get first 10 Readings
     * const readings = await prisma.reading.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const readingWithIdOnly = await prisma.reading.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReadingFindManyArgs>(args?: SelectSubset<T, ReadingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reading.
     * @param {ReadingCreateArgs} args - Arguments to create a Reading.
     * @example
     * // Create one Reading
     * const Reading = await prisma.reading.create({
     *   data: {
     *     // ... data to create a Reading
     *   }
     * })
     * 
     */
    create<T extends ReadingCreateArgs>(args: SelectSubset<T, ReadingCreateArgs<ExtArgs>>): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Readings.
     * @param {ReadingCreateManyArgs} args - Arguments to create many Readings.
     * @example
     * // Create many Readings
     * const reading = await prisma.reading.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReadingCreateManyArgs>(args?: SelectSubset<T, ReadingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Readings and returns the data saved in the database.
     * @param {ReadingCreateManyAndReturnArgs} args - Arguments to create many Readings.
     * @example
     * // Create many Readings
     * const reading = await prisma.reading.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Readings and only return the `id`
     * const readingWithIdOnly = await prisma.reading.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReadingCreateManyAndReturnArgs>(args?: SelectSubset<T, ReadingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reading.
     * @param {ReadingDeleteArgs} args - Arguments to delete one Reading.
     * @example
     * // Delete one Reading
     * const Reading = await prisma.reading.delete({
     *   where: {
     *     // ... filter to delete one Reading
     *   }
     * })
     * 
     */
    delete<T extends ReadingDeleteArgs>(args: SelectSubset<T, ReadingDeleteArgs<ExtArgs>>): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reading.
     * @param {ReadingUpdateArgs} args - Arguments to update one Reading.
     * @example
     * // Update one Reading
     * const reading = await prisma.reading.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReadingUpdateArgs>(args: SelectSubset<T, ReadingUpdateArgs<ExtArgs>>): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Readings.
     * @param {ReadingDeleteManyArgs} args - Arguments to filter Readings to delete.
     * @example
     * // Delete a few Readings
     * const { count } = await prisma.reading.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReadingDeleteManyArgs>(args?: SelectSubset<T, ReadingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Readings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Readings
     * const reading = await prisma.reading.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReadingUpdateManyArgs>(args: SelectSubset<T, ReadingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Readings and returns the data updated in the database.
     * @param {ReadingUpdateManyAndReturnArgs} args - Arguments to update many Readings.
     * @example
     * // Update many Readings
     * const reading = await prisma.reading.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Readings and only return the `id`
     * const readingWithIdOnly = await prisma.reading.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReadingUpdateManyAndReturnArgs>(args: SelectSubset<T, ReadingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reading.
     * @param {ReadingUpsertArgs} args - Arguments to update or create a Reading.
     * @example
     * // Update or create a Reading
     * const reading = await prisma.reading.upsert({
     *   create: {
     *     // ... data to create a Reading
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reading we want to update
     *   }
     * })
     */
    upsert<T extends ReadingUpsertArgs>(args: SelectSubset<T, ReadingUpsertArgs<ExtArgs>>): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Readings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingCountArgs} args - Arguments to filter Readings to count.
     * @example
     * // Count the number of Readings
     * const count = await prisma.reading.count({
     *   where: {
     *     // ... the filter for the Readings we want to count
     *   }
     * })
    **/
    count<T extends ReadingCountArgs>(
      args?: Subset<T, ReadingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReadingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReadingAggregateArgs>(args: Subset<T, ReadingAggregateArgs>): Prisma.PrismaPromise<GetReadingAggregateType<T>>

    /**
     * Group by Reading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingGroupByArgs} args - Group by arguments.
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
      T extends ReadingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReadingGroupByArgs['orderBy'] }
        : { orderBy?: ReadingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReadingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReadingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reading model
   */
  readonly fields: ReadingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reading.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReadingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Reading$UserArgs<ExtArgs> = {}>(args?: Subset<T, Reading$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    baseHexagram<T extends HexagramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HexagramDefaultArgs<ExtArgs>>): Prisma__HexagramClient<$Result.GetResult<Prisma.$HexagramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resultHexagram<T extends HexagramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HexagramDefaultArgs<ExtArgs>>): Prisma__HexagramClient<$Result.GetResult<Prisma.$HexagramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chats<T extends Reading$chatsArgs<ExtArgs> = {}>(args?: Subset<T, Reading$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shares<T extends Reading$sharesArgs<ExtArgs> = {}>(args?: Subset<T, Reading$sharesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends Reading$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, Reading$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Reading model
   */
  interface ReadingFieldRefs {
    readonly id: FieldRef<"Reading", 'String'>
    readonly userId: FieldRef<"Reading", 'String'>
    readonly createdAt: FieldRef<"Reading", 'DateTime'>
    readonly method: FieldRef<"Reading", 'String'>
    readonly seed: FieldRef<"Reading", 'String'>
    readonly tossesJson: FieldRef<"Reading", 'Json'>
    readonly movingLines: FieldRef<"Reading", 'Int[]'>
    readonly baseHexagramId: FieldRef<"Reading", 'Int'>
    readonly resultHexagramId: FieldRef<"Reading", 'Int'>
    readonly question: FieldRef<"Reading", 'String'>
    readonly notes: FieldRef<"Reading", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reading findUnique
   */
  export type ReadingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reading
     */
    omit?: ReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * Filter, which Reading to fetch.
     */
    where: ReadingWhereUniqueInput
  }

  /**
   * Reading findUniqueOrThrow
   */
  export type ReadingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reading
     */
    omit?: ReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * Filter, which Reading to fetch.
     */
    where: ReadingWhereUniqueInput
  }

  /**
   * Reading findFirst
   */
  export type ReadingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reading
     */
    omit?: ReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * Filter, which Reading to fetch.
     */
    where?: ReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Readings to fetch.
     */
    orderBy?: ReadingOrderByWithRelationInput | ReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Readings.
     */
    cursor?: ReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Readings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Readings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Readings.
     */
    distinct?: ReadingScalarFieldEnum | ReadingScalarFieldEnum[]
  }

  /**
   * Reading findFirstOrThrow
   */
  export type ReadingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reading
     */
    omit?: ReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * Filter, which Reading to fetch.
     */
    where?: ReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Readings to fetch.
     */
    orderBy?: ReadingOrderByWithRelationInput | ReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Readings.
     */
    cursor?: ReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Readings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Readings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Readings.
     */
    distinct?: ReadingScalarFieldEnum | ReadingScalarFieldEnum[]
  }

  /**
   * Reading findMany
   */
  export type ReadingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reading
     */
    omit?: ReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * Filter, which Readings to fetch.
     */
    where?: ReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Readings to fetch.
     */
    orderBy?: ReadingOrderByWithRelationInput | ReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Readings.
     */
    cursor?: ReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Readings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Readings.
     */
    skip?: number
    distinct?: ReadingScalarFieldEnum | ReadingScalarFieldEnum[]
  }

  /**
   * Reading create
   */
  export type ReadingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reading
     */
    omit?: ReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * The data needed to create a Reading.
     */
    data: XOR<ReadingCreateInput, ReadingUncheckedCreateInput>
  }

  /**
   * Reading createMany
   */
  export type ReadingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Readings.
     */
    data: ReadingCreateManyInput | ReadingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reading createManyAndReturn
   */
  export type ReadingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reading
     */
    omit?: ReadingOmit<ExtArgs> | null
    /**
     * The data used to create many Readings.
     */
    data: ReadingCreateManyInput | ReadingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reading update
   */
  export type ReadingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reading
     */
    omit?: ReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * The data needed to update a Reading.
     */
    data: XOR<ReadingUpdateInput, ReadingUncheckedUpdateInput>
    /**
     * Choose, which Reading to update.
     */
    where: ReadingWhereUniqueInput
  }

  /**
   * Reading updateMany
   */
  export type ReadingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Readings.
     */
    data: XOR<ReadingUpdateManyMutationInput, ReadingUncheckedUpdateManyInput>
    /**
     * Filter which Readings to update
     */
    where?: ReadingWhereInput
    /**
     * Limit how many Readings to update.
     */
    limit?: number
  }

  /**
   * Reading updateManyAndReturn
   */
  export type ReadingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reading
     */
    omit?: ReadingOmit<ExtArgs> | null
    /**
     * The data used to update Readings.
     */
    data: XOR<ReadingUpdateManyMutationInput, ReadingUncheckedUpdateManyInput>
    /**
     * Filter which Readings to update
     */
    where?: ReadingWhereInput
    /**
     * Limit how many Readings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reading upsert
   */
  export type ReadingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reading
     */
    omit?: ReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * The filter to search for the Reading to update in case it exists.
     */
    where: ReadingWhereUniqueInput
    /**
     * In case the Reading found by the `where` argument doesn't exist, create a new Reading with this data.
     */
    create: XOR<ReadingCreateInput, ReadingUncheckedCreateInput>
    /**
     * In case the Reading was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReadingUpdateInput, ReadingUncheckedUpdateInput>
  }

  /**
   * Reading delete
   */
  export type ReadingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reading
     */
    omit?: ReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * Filter which Reading to delete.
     */
    where: ReadingWhereUniqueInput
  }

  /**
   * Reading deleteMany
   */
  export type ReadingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Readings to delete
     */
    where?: ReadingWhereInput
    /**
     * Limit how many Readings to delete.
     */
    limit?: number
  }

  /**
   * Reading.User
   */
  export type Reading$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Reading.chats
   */
  export type Reading$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    cursor?: ChatSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * Reading.shares
   */
  export type Reading$sharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    where?: ShareLinkWhereInput
    orderBy?: ShareLinkOrderByWithRelationInput | ShareLinkOrderByWithRelationInput[]
    cursor?: ShareLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShareLinkScalarFieldEnum | ShareLinkScalarFieldEnum[]
  }

  /**
   * Reading.favorites
   */
  export type Reading$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Reading without action
   */
  export type ReadingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reading
     */
    omit?: ReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
  }


  /**
   * Model ChatSession
   */

  export type AggregateChatSession = {
    _count: ChatSessionCountAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  export type ChatSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    readingId: string | null
    createdAt: Date | null
  }

  export type ChatSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    readingId: string | null
    createdAt: Date | null
  }

  export type ChatSessionCountAggregateOutputType = {
    id: number
    userId: number
    readingId: number
    createdAt: number
    _all: number
  }


  export type ChatSessionMinAggregateInputType = {
    id?: true
    userId?: true
    readingId?: true
    createdAt?: true
  }

  export type ChatSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    readingId?: true
    createdAt?: true
  }

  export type ChatSessionCountAggregateInputType = {
    id?: true
    userId?: true
    readingId?: true
    createdAt?: true
    _all?: true
  }

  export type ChatSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSession to aggregate.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatSessions
    **/
    _count?: true | ChatSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatSessionMaxAggregateInputType
  }

  export type GetChatSessionAggregateType<T extends ChatSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateChatSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatSession[P]>
      : GetScalarType<T[P], AggregateChatSession[P]>
  }




  export type ChatSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithAggregationInput | ChatSessionOrderByWithAggregationInput[]
    by: ChatSessionScalarFieldEnum[] | ChatSessionScalarFieldEnum
    having?: ChatSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatSessionCountAggregateInputType | true
    _min?: ChatSessionMinAggregateInputType
    _max?: ChatSessionMaxAggregateInputType
  }

  export type ChatSessionGroupByOutputType = {
    id: string
    userId: string | null
    readingId: string
    createdAt: Date
    _count: ChatSessionCountAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  type GetChatSessionGroupByPayload<T extends ChatSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
        }
      >
    >


  export type ChatSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    readingId?: boolean
    createdAt?: boolean
    User?: boolean | ChatSession$UserArgs<ExtArgs>
    Reading?: boolean | ReadingDefaultArgs<ExtArgs>
    messages?: boolean | ChatSession$messagesArgs<ExtArgs>
    _count?: boolean | ChatSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    readingId?: boolean
    createdAt?: boolean
    User?: boolean | ChatSession$UserArgs<ExtArgs>
    Reading?: boolean | ReadingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    readingId?: boolean
    createdAt?: boolean
    User?: boolean | ChatSession$UserArgs<ExtArgs>
    Reading?: boolean | ReadingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    readingId?: boolean
    createdAt?: boolean
  }

  export type ChatSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "readingId" | "createdAt", ExtArgs["result"]["chatSession"]>
  export type ChatSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | ChatSession$UserArgs<ExtArgs>
    Reading?: boolean | ReadingDefaultArgs<ExtArgs>
    messages?: boolean | ChatSession$messagesArgs<ExtArgs>
    _count?: boolean | ChatSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | ChatSession$UserArgs<ExtArgs>
    Reading?: boolean | ReadingDefaultArgs<ExtArgs>
  }
  export type ChatSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | ChatSession$UserArgs<ExtArgs>
    Reading?: boolean | ReadingDefaultArgs<ExtArgs>
  }

  export type $ChatSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatSession"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
      Reading: Prisma.$ReadingPayload<ExtArgs>
      messages: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      readingId: string
      createdAt: Date
    }, ExtArgs["result"]["chatSession"]>
    composites: {}
  }

  type ChatSessionGetPayload<S extends boolean | null | undefined | ChatSessionDefaultArgs> = $Result.GetResult<Prisma.$ChatSessionPayload, S>

  type ChatSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatSessionCountAggregateInputType | true
    }

  export interface ChatSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatSession'], meta: { name: 'ChatSession' } }
    /**
     * Find zero or one ChatSession that matches the filter.
     * @param {ChatSessionFindUniqueArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatSessionFindUniqueArgs>(args: SelectSubset<T, ChatSessionFindUniqueArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatSessionFindUniqueOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatSessionFindFirstArgs>(args?: SelectSubset<T, ChatSessionFindFirstArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatSessions
     * const chatSessions = await prisma.chatSession.findMany()
     * 
     * // Get first 10 ChatSessions
     * const chatSessions = await prisma.chatSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatSessionFindManyArgs>(args?: SelectSubset<T, ChatSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatSession.
     * @param {ChatSessionCreateArgs} args - Arguments to create a ChatSession.
     * @example
     * // Create one ChatSession
     * const ChatSession = await prisma.chatSession.create({
     *   data: {
     *     // ... data to create a ChatSession
     *   }
     * })
     * 
     */
    create<T extends ChatSessionCreateArgs>(args: SelectSubset<T, ChatSessionCreateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatSessions.
     * @param {ChatSessionCreateManyArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatSessionCreateManyArgs>(args?: SelectSubset<T, ChatSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatSessions and returns the data saved in the database.
     * @param {ChatSessionCreateManyAndReturnArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatSessions and only return the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatSession.
     * @param {ChatSessionDeleteArgs} args - Arguments to delete one ChatSession.
     * @example
     * // Delete one ChatSession
     * const ChatSession = await prisma.chatSession.delete({
     *   where: {
     *     // ... filter to delete one ChatSession
     *   }
     * })
     * 
     */
    delete<T extends ChatSessionDeleteArgs>(args: SelectSubset<T, ChatSessionDeleteArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatSession.
     * @param {ChatSessionUpdateArgs} args - Arguments to update one ChatSession.
     * @example
     * // Update one ChatSession
     * const chatSession = await prisma.chatSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatSessionUpdateArgs>(args: SelectSubset<T, ChatSessionUpdateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatSessions.
     * @param {ChatSessionDeleteManyArgs} args - Arguments to filter ChatSessions to delete.
     * @example
     * // Delete a few ChatSessions
     * const { count } = await prisma.chatSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatSessionDeleteManyArgs>(args?: SelectSubset<T, ChatSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatSessionUpdateManyArgs>(args: SelectSubset<T, ChatSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions and returns the data updated in the database.
     * @param {ChatSessionUpdateManyAndReturnArgs} args - Arguments to update many ChatSessions.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatSessions and only return the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatSession.
     * @param {ChatSessionUpsertArgs} args - Arguments to update or create a ChatSession.
     * @example
     * // Update or create a ChatSession
     * const chatSession = await prisma.chatSession.upsert({
     *   create: {
     *     // ... data to create a ChatSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatSession we want to update
     *   }
     * })
     */
    upsert<T extends ChatSessionUpsertArgs>(args: SelectSubset<T, ChatSessionUpsertArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionCountArgs} args - Arguments to filter ChatSessions to count.
     * @example
     * // Count the number of ChatSessions
     * const count = await prisma.chatSession.count({
     *   where: {
     *     // ... the filter for the ChatSessions we want to count
     *   }
     * })
    **/
    count<T extends ChatSessionCountArgs>(
      args?: Subset<T, ChatSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatSessionAggregateArgs>(args: Subset<T, ChatSessionAggregateArgs>): Prisma.PrismaPromise<GetChatSessionAggregateType<T>>

    /**
     * Group by ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionGroupByArgs} args - Group by arguments.
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
      T extends ChatSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatSessionGroupByArgs['orderBy'] }
        : { orderBy?: ChatSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatSession model
   */
  readonly fields: ChatSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends ChatSession$UserArgs<ExtArgs> = {}>(args?: Subset<T, ChatSession$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Reading<T extends ReadingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReadingDefaultArgs<ExtArgs>>): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends ChatSession$messagesArgs<ExtArgs> = {}>(args?: Subset<T, ChatSession$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ChatSession model
   */
  interface ChatSessionFieldRefs {
    readonly id: FieldRef<"ChatSession", 'String'>
    readonly userId: FieldRef<"ChatSession", 'String'>
    readonly readingId: FieldRef<"ChatSession", 'String'>
    readonly createdAt: FieldRef<"ChatSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatSession findUnique
   */
  export type ChatSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findUniqueOrThrow
   */
  export type ChatSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findFirst
   */
  export type ChatSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findFirstOrThrow
   */
  export type ChatSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findMany
   */
  export type ChatSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSessions to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession create
   */
  export type ChatSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatSession.
     */
    data: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
  }

  /**
   * ChatSession createMany
   */
  export type ChatSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatSession createManyAndReturn
   */
  export type ChatSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatSession update
   */
  export type ChatSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatSession.
     */
    data: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
    /**
     * Choose, which ChatSession to update.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession updateMany
   */
  export type ChatSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatSessions.
     */
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChatSessions to update
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to update.
     */
    limit?: number
  }

  /**
   * ChatSession updateManyAndReturn
   */
  export type ChatSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The data used to update ChatSessions.
     */
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChatSessions to update
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatSession upsert
   */
  export type ChatSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatSession to update in case it exists.
     */
    where: ChatSessionWhereUniqueInput
    /**
     * In case the ChatSession found by the `where` argument doesn't exist, create a new ChatSession with this data.
     */
    create: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
    /**
     * In case the ChatSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
  }

  /**
   * ChatSession delete
   */
  export type ChatSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter which ChatSession to delete.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession deleteMany
   */
  export type ChatSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSessions to delete
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to delete.
     */
    limit?: number
  }

  /**
   * ChatSession.User
   */
  export type ChatSession$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ChatSession.messages
   */
  export type ChatSession$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatSession without action
   */
  export type ChatSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    role: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    role: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    sessionId: number
    role: number
    content: number
    createdAt: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    sessionId?: true
    role?: true
    content?: true
    createdAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    sessionId?: true
    role?: true
    content?: true
    createdAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    sessionId?: true
    role?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    sessionId: string
    role: string
    content: string
    createdAt: Date
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    Session?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    Session?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    Session?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "role" | "content" | "createdAt", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Session?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Session?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Session?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      Session: Prisma.$ChatSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      role: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
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
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Session<T extends ChatSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatSessionDefaultArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly sessionId: FieldRef<"ChatMessage", 'String'>
    readonly role: FieldRef<"ChatMessage", 'String'>
    readonly content: FieldRef<"ChatMessage", 'String'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Model ShareLink
   */

  export type AggregateShareLink = {
    _count: ShareLinkCountAggregateOutputType | null
    _min: ShareLinkMinAggregateOutputType | null
    _max: ShareLinkMaxAggregateOutputType | null
  }

  export type ShareLinkMinAggregateOutputType = {
    id: string | null
    readingId: string | null
    token: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type ShareLinkMaxAggregateOutputType = {
    id: string | null
    readingId: string | null
    token: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type ShareLinkCountAggregateOutputType = {
    id: number
    readingId: number
    token: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type ShareLinkMinAggregateInputType = {
    id?: true
    readingId?: true
    token?: true
    createdAt?: true
    expiresAt?: true
  }

  export type ShareLinkMaxAggregateInputType = {
    id?: true
    readingId?: true
    token?: true
    createdAt?: true
    expiresAt?: true
  }

  export type ShareLinkCountAggregateInputType = {
    id?: true
    readingId?: true
    token?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type ShareLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShareLink to aggregate.
     */
    where?: ShareLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareLinks to fetch.
     */
    orderBy?: ShareLinkOrderByWithRelationInput | ShareLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShareLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShareLinks
    **/
    _count?: true | ShareLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShareLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShareLinkMaxAggregateInputType
  }

  export type GetShareLinkAggregateType<T extends ShareLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateShareLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShareLink[P]>
      : GetScalarType<T[P], AggregateShareLink[P]>
  }




  export type ShareLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareLinkWhereInput
    orderBy?: ShareLinkOrderByWithAggregationInput | ShareLinkOrderByWithAggregationInput[]
    by: ShareLinkScalarFieldEnum[] | ShareLinkScalarFieldEnum
    having?: ShareLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShareLinkCountAggregateInputType | true
    _min?: ShareLinkMinAggregateInputType
    _max?: ShareLinkMaxAggregateInputType
  }

  export type ShareLinkGroupByOutputType = {
    id: string
    readingId: string
    token: string
    createdAt: Date
    expiresAt: Date | null
    _count: ShareLinkCountAggregateOutputType | null
    _min: ShareLinkMinAggregateOutputType | null
    _max: ShareLinkMaxAggregateOutputType | null
  }

  type GetShareLinkGroupByPayload<T extends ShareLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShareLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShareLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShareLinkGroupByOutputType[P]>
            : GetScalarType<T[P], ShareLinkGroupByOutputType[P]>
        }
      >
    >


  export type ShareLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    readingId?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    Reading?: boolean | ReadingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareLink"]>

  export type ShareLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    readingId?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    Reading?: boolean | ReadingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareLink"]>

  export type ShareLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    readingId?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    Reading?: boolean | ReadingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareLink"]>

  export type ShareLinkSelectScalar = {
    id?: boolean
    readingId?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type ShareLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "readingId" | "token" | "createdAt" | "expiresAt", ExtArgs["result"]["shareLink"]>
  export type ShareLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Reading?: boolean | ReadingDefaultArgs<ExtArgs>
  }
  export type ShareLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Reading?: boolean | ReadingDefaultArgs<ExtArgs>
  }
  export type ShareLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Reading?: boolean | ReadingDefaultArgs<ExtArgs>
  }

  export type $ShareLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShareLink"
    objects: {
      Reading: Prisma.$ReadingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      readingId: string
      token: string
      createdAt: Date
      expiresAt: Date | null
    }, ExtArgs["result"]["shareLink"]>
    composites: {}
  }

  type ShareLinkGetPayload<S extends boolean | null | undefined | ShareLinkDefaultArgs> = $Result.GetResult<Prisma.$ShareLinkPayload, S>

  type ShareLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShareLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShareLinkCountAggregateInputType | true
    }

  export interface ShareLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShareLink'], meta: { name: 'ShareLink' } }
    /**
     * Find zero or one ShareLink that matches the filter.
     * @param {ShareLinkFindUniqueArgs} args - Arguments to find a ShareLink
     * @example
     * // Get one ShareLink
     * const shareLink = await prisma.shareLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShareLinkFindUniqueArgs>(args: SelectSubset<T, ShareLinkFindUniqueArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShareLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShareLinkFindUniqueOrThrowArgs} args - Arguments to find a ShareLink
     * @example
     * // Get one ShareLink
     * const shareLink = await prisma.shareLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShareLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, ShareLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShareLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkFindFirstArgs} args - Arguments to find a ShareLink
     * @example
     * // Get one ShareLink
     * const shareLink = await prisma.shareLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShareLinkFindFirstArgs>(args?: SelectSubset<T, ShareLinkFindFirstArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShareLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkFindFirstOrThrowArgs} args - Arguments to find a ShareLink
     * @example
     * // Get one ShareLink
     * const shareLink = await prisma.shareLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShareLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, ShareLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShareLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShareLinks
     * const shareLinks = await prisma.shareLink.findMany()
     * 
     * // Get first 10 ShareLinks
     * const shareLinks = await prisma.shareLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shareLinkWithIdOnly = await prisma.shareLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShareLinkFindManyArgs>(args?: SelectSubset<T, ShareLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShareLink.
     * @param {ShareLinkCreateArgs} args - Arguments to create a ShareLink.
     * @example
     * // Create one ShareLink
     * const ShareLink = await prisma.shareLink.create({
     *   data: {
     *     // ... data to create a ShareLink
     *   }
     * })
     * 
     */
    create<T extends ShareLinkCreateArgs>(args: SelectSubset<T, ShareLinkCreateArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShareLinks.
     * @param {ShareLinkCreateManyArgs} args - Arguments to create many ShareLinks.
     * @example
     * // Create many ShareLinks
     * const shareLink = await prisma.shareLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShareLinkCreateManyArgs>(args?: SelectSubset<T, ShareLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShareLinks and returns the data saved in the database.
     * @param {ShareLinkCreateManyAndReturnArgs} args - Arguments to create many ShareLinks.
     * @example
     * // Create many ShareLinks
     * const shareLink = await prisma.shareLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShareLinks and only return the `id`
     * const shareLinkWithIdOnly = await prisma.shareLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShareLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, ShareLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShareLink.
     * @param {ShareLinkDeleteArgs} args - Arguments to delete one ShareLink.
     * @example
     * // Delete one ShareLink
     * const ShareLink = await prisma.shareLink.delete({
     *   where: {
     *     // ... filter to delete one ShareLink
     *   }
     * })
     * 
     */
    delete<T extends ShareLinkDeleteArgs>(args: SelectSubset<T, ShareLinkDeleteArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShareLink.
     * @param {ShareLinkUpdateArgs} args - Arguments to update one ShareLink.
     * @example
     * // Update one ShareLink
     * const shareLink = await prisma.shareLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShareLinkUpdateArgs>(args: SelectSubset<T, ShareLinkUpdateArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShareLinks.
     * @param {ShareLinkDeleteManyArgs} args - Arguments to filter ShareLinks to delete.
     * @example
     * // Delete a few ShareLinks
     * const { count } = await prisma.shareLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShareLinkDeleteManyArgs>(args?: SelectSubset<T, ShareLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShareLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShareLinks
     * const shareLink = await prisma.shareLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShareLinkUpdateManyArgs>(args: SelectSubset<T, ShareLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShareLinks and returns the data updated in the database.
     * @param {ShareLinkUpdateManyAndReturnArgs} args - Arguments to update many ShareLinks.
     * @example
     * // Update many ShareLinks
     * const shareLink = await prisma.shareLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShareLinks and only return the `id`
     * const shareLinkWithIdOnly = await prisma.shareLink.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShareLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, ShareLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShareLink.
     * @param {ShareLinkUpsertArgs} args - Arguments to update or create a ShareLink.
     * @example
     * // Update or create a ShareLink
     * const shareLink = await prisma.shareLink.upsert({
     *   create: {
     *     // ... data to create a ShareLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShareLink we want to update
     *   }
     * })
     */
    upsert<T extends ShareLinkUpsertArgs>(args: SelectSubset<T, ShareLinkUpsertArgs<ExtArgs>>): Prisma__ShareLinkClient<$Result.GetResult<Prisma.$ShareLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShareLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkCountArgs} args - Arguments to filter ShareLinks to count.
     * @example
     * // Count the number of ShareLinks
     * const count = await prisma.shareLink.count({
     *   where: {
     *     // ... the filter for the ShareLinks we want to count
     *   }
     * })
    **/
    count<T extends ShareLinkCountArgs>(
      args?: Subset<T, ShareLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShareLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShareLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShareLinkAggregateArgs>(args: Subset<T, ShareLinkAggregateArgs>): Prisma.PrismaPromise<GetShareLinkAggregateType<T>>

    /**
     * Group by ShareLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareLinkGroupByArgs} args - Group by arguments.
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
      T extends ShareLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShareLinkGroupByArgs['orderBy'] }
        : { orderBy?: ShareLinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShareLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShareLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShareLink model
   */
  readonly fields: ShareLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShareLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShareLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Reading<T extends ReadingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReadingDefaultArgs<ExtArgs>>): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ShareLink model
   */
  interface ShareLinkFieldRefs {
    readonly id: FieldRef<"ShareLink", 'String'>
    readonly readingId: FieldRef<"ShareLink", 'String'>
    readonly token: FieldRef<"ShareLink", 'String'>
    readonly createdAt: FieldRef<"ShareLink", 'DateTime'>
    readonly expiresAt: FieldRef<"ShareLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShareLink findUnique
   */
  export type ShareLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * Filter, which ShareLink to fetch.
     */
    where: ShareLinkWhereUniqueInput
  }

  /**
   * ShareLink findUniqueOrThrow
   */
  export type ShareLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * Filter, which ShareLink to fetch.
     */
    where: ShareLinkWhereUniqueInput
  }

  /**
   * ShareLink findFirst
   */
  export type ShareLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * Filter, which ShareLink to fetch.
     */
    where?: ShareLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareLinks to fetch.
     */
    orderBy?: ShareLinkOrderByWithRelationInput | ShareLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShareLinks.
     */
    cursor?: ShareLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareLinks.
     */
    distinct?: ShareLinkScalarFieldEnum | ShareLinkScalarFieldEnum[]
  }

  /**
   * ShareLink findFirstOrThrow
   */
  export type ShareLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * Filter, which ShareLink to fetch.
     */
    where?: ShareLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareLinks to fetch.
     */
    orderBy?: ShareLinkOrderByWithRelationInput | ShareLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShareLinks.
     */
    cursor?: ShareLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareLinks.
     */
    distinct?: ShareLinkScalarFieldEnum | ShareLinkScalarFieldEnum[]
  }

  /**
   * ShareLink findMany
   */
  export type ShareLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * Filter, which ShareLinks to fetch.
     */
    where?: ShareLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareLinks to fetch.
     */
    orderBy?: ShareLinkOrderByWithRelationInput | ShareLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShareLinks.
     */
    cursor?: ShareLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareLinks.
     */
    skip?: number
    distinct?: ShareLinkScalarFieldEnum | ShareLinkScalarFieldEnum[]
  }

  /**
   * ShareLink create
   */
  export type ShareLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a ShareLink.
     */
    data: XOR<ShareLinkCreateInput, ShareLinkUncheckedCreateInput>
  }

  /**
   * ShareLink createMany
   */
  export type ShareLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShareLinks.
     */
    data: ShareLinkCreateManyInput | ShareLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShareLink createManyAndReturn
   */
  export type ShareLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * The data used to create many ShareLinks.
     */
    data: ShareLinkCreateManyInput | ShareLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShareLink update
   */
  export type ShareLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a ShareLink.
     */
    data: XOR<ShareLinkUpdateInput, ShareLinkUncheckedUpdateInput>
    /**
     * Choose, which ShareLink to update.
     */
    where: ShareLinkWhereUniqueInput
  }

  /**
   * ShareLink updateMany
   */
  export type ShareLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShareLinks.
     */
    data: XOR<ShareLinkUpdateManyMutationInput, ShareLinkUncheckedUpdateManyInput>
    /**
     * Filter which ShareLinks to update
     */
    where?: ShareLinkWhereInput
    /**
     * Limit how many ShareLinks to update.
     */
    limit?: number
  }

  /**
   * ShareLink updateManyAndReturn
   */
  export type ShareLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * The data used to update ShareLinks.
     */
    data: XOR<ShareLinkUpdateManyMutationInput, ShareLinkUncheckedUpdateManyInput>
    /**
     * Filter which ShareLinks to update
     */
    where?: ShareLinkWhereInput
    /**
     * Limit how many ShareLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShareLink upsert
   */
  export type ShareLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the ShareLink to update in case it exists.
     */
    where: ShareLinkWhereUniqueInput
    /**
     * In case the ShareLink found by the `where` argument doesn't exist, create a new ShareLink with this data.
     */
    create: XOR<ShareLinkCreateInput, ShareLinkUncheckedCreateInput>
    /**
     * In case the ShareLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShareLinkUpdateInput, ShareLinkUncheckedUpdateInput>
  }

  /**
   * ShareLink delete
   */
  export type ShareLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
    /**
     * Filter which ShareLink to delete.
     */
    where: ShareLinkWhereUniqueInput
  }

  /**
   * ShareLink deleteMany
   */
  export type ShareLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShareLinks to delete
     */
    where?: ShareLinkWhereInput
    /**
     * Limit how many ShareLinks to delete.
     */
    limit?: number
  }

  /**
   * ShareLink without action
   */
  export type ShareLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareLink
     */
    select?: ShareLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareLink
     */
    omit?: ShareLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareLinkInclude<ExtArgs> | null
  }


  /**
   * Model Favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteMinAggregateOutputType = {
    id: string | null
    userId: string | null
    readingId: string | null
    createdAt: Date | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    readingId: string | null
    createdAt: Date | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    userId: number
    readingId: number
    createdAt: number
    _all: number
  }


  export type FavoriteMinAggregateInputType = {
    id?: true
    userId?: true
    readingId?: true
    createdAt?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    userId?: true
    readingId?: true
    createdAt?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    userId?: true
    readingId?: true
    createdAt?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type FavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithAggregationInput | FavoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: FavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }

  export type FavoriteGroupByOutputType = {
    id: string
    userId: string
    readingId: string
    createdAt: Date
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    readingId?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Reading?: boolean | ReadingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    readingId?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Reading?: boolean | ReadingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    readingId?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Reading?: boolean | ReadingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectScalar = {
    id?: boolean
    userId?: boolean
    readingId?: boolean
    createdAt?: boolean
  }

  export type FavoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "readingId" | "createdAt", ExtArgs["result"]["favorite"]>
  export type FavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Reading?: boolean | ReadingDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Reading?: boolean | ReadingDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Reading?: boolean | ReadingDefaultArgs<ExtArgs>
  }

  export type $FavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorite"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      Reading: Prisma.$ReadingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      readingId: string
      createdAt: Date
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }

  type FavoriteGetPayload<S extends boolean | null | undefined | FavoriteDefaultArgs> = $Result.GetResult<Prisma.$FavoritePayload, S>

  type FavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface FavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorite'], meta: { name: 'Favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteFindUniqueArgs>(args: SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteFindFirstArgs>(args?: SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteFindManyArgs>(args?: SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
     */
    create<T extends FavoriteCreateArgs>(args: SelectSubset<T, FavoriteCreateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favorites.
     * @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteCreateManyArgs>(args?: SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {FavoriteCreateManyAndReturnArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
     */
    delete<T extends FavoriteDeleteArgs>(args: SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteUpdateArgs>(args: SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteDeleteManyArgs>(args?: SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteUpdateManyArgs>(args: SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites and returns the data updated in the database.
     * @param {FavoriteUpdateManyAndReturnArgs} args - Arguments to update many Favorites.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.updateManyAndReturn({
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
    updateManyAndReturn<T extends FavoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteUpsertArgs>(args: SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
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
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorite model
   */
  readonly fields: FavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Reading<T extends ReadingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReadingDefaultArgs<ExtArgs>>): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Favorite model
   */
  interface FavoriteFieldRefs {
    readonly id: FieldRef<"Favorite", 'String'>
    readonly userId: FieldRef<"Favorite", 'String'>
    readonly readingId: FieldRef<"Favorite", 'String'>
    readonly createdAt: FieldRef<"Favorite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findUniqueOrThrow
   */
  export type FavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findFirstOrThrow
   */
  export type FavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite create
   */
  export type FavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorite.
     */
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
  }

  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorite createManyAndReturn
   */
  export type FavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorite.
     */
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
    /**
     * Choose, which Favorite to update.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
  }

  /**
   * Favorite updateManyAndReturn
   */
  export type FavoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: FavoriteWhereUniqueInput
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
  }

  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter which Favorite to delete.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to delete.
     */
    limit?: number
  }

  /**
   * Favorite without action
   */
  export type FavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
  }


  /**
   * Model JournalEntry
   */

  export type AggregateJournalEntry = {
    _count: JournalEntryCountAggregateOutputType | null
    _min: JournalEntryMinAggregateOutputType | null
    _max: JournalEntryMaxAggregateOutputType | null
  }

  export type JournalEntryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    title: string | null
    body: string | null
  }

  export type JournalEntryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    title: string | null
    body: string | null
  }

  export type JournalEntryCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    title: number
    body: number
    _all: number
  }


  export type JournalEntryMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    title?: true
    body?: true
  }

  export type JournalEntryMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    title?: true
    body?: true
  }

  export type JournalEntryCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    title?: true
    body?: true
    _all?: true
  }

  export type JournalEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JournalEntry to aggregate.
     */
    where?: JournalEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalEntries to fetch.
     */
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JournalEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JournalEntries
    **/
    _count?: true | JournalEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JournalEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JournalEntryMaxAggregateInputType
  }

  export type GetJournalEntryAggregateType<T extends JournalEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateJournalEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJournalEntry[P]>
      : GetScalarType<T[P], AggregateJournalEntry[P]>
  }




  export type JournalEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JournalEntryWhereInput
    orderBy?: JournalEntryOrderByWithAggregationInput | JournalEntryOrderByWithAggregationInput[]
    by: JournalEntryScalarFieldEnum[] | JournalEntryScalarFieldEnum
    having?: JournalEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JournalEntryCountAggregateInputType | true
    _min?: JournalEntryMinAggregateInputType
    _max?: JournalEntryMaxAggregateInputType
  }

  export type JournalEntryGroupByOutputType = {
    id: string
    userId: string
    createdAt: Date
    title: string | null
    body: string
    _count: JournalEntryCountAggregateOutputType | null
    _min: JournalEntryMinAggregateOutputType | null
    _max: JournalEntryMaxAggregateOutputType | null
  }

  type GetJournalEntryGroupByPayload<T extends JournalEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JournalEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JournalEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JournalEntryGroupByOutputType[P]>
            : GetScalarType<T[P], JournalEntryGroupByOutputType[P]>
        }
      >
    >


  export type JournalEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    title?: boolean
    body?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journalEntry"]>

  export type JournalEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    title?: boolean
    body?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journalEntry"]>

  export type JournalEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    title?: boolean
    body?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journalEntry"]>

  export type JournalEntrySelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    title?: boolean
    body?: boolean
  }

  export type JournalEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "title" | "body", ExtArgs["result"]["journalEntry"]>
  export type JournalEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type JournalEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type JournalEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $JournalEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JournalEntry"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      createdAt: Date
      title: string | null
      body: string
    }, ExtArgs["result"]["journalEntry"]>
    composites: {}
  }

  type JournalEntryGetPayload<S extends boolean | null | undefined | JournalEntryDefaultArgs> = $Result.GetResult<Prisma.$JournalEntryPayload, S>

  type JournalEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JournalEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JournalEntryCountAggregateInputType | true
    }

  export interface JournalEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JournalEntry'], meta: { name: 'JournalEntry' } }
    /**
     * Find zero or one JournalEntry that matches the filter.
     * @param {JournalEntryFindUniqueArgs} args - Arguments to find a JournalEntry
     * @example
     * // Get one JournalEntry
     * const journalEntry = await prisma.journalEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JournalEntryFindUniqueArgs>(args: SelectSubset<T, JournalEntryFindUniqueArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JournalEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JournalEntryFindUniqueOrThrowArgs} args - Arguments to find a JournalEntry
     * @example
     * // Get one JournalEntry
     * const journalEntry = await prisma.journalEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JournalEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, JournalEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JournalEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryFindFirstArgs} args - Arguments to find a JournalEntry
     * @example
     * // Get one JournalEntry
     * const journalEntry = await prisma.journalEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JournalEntryFindFirstArgs>(args?: SelectSubset<T, JournalEntryFindFirstArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JournalEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryFindFirstOrThrowArgs} args - Arguments to find a JournalEntry
     * @example
     * // Get one JournalEntry
     * const journalEntry = await prisma.journalEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JournalEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, JournalEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JournalEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JournalEntries
     * const journalEntries = await prisma.journalEntry.findMany()
     * 
     * // Get first 10 JournalEntries
     * const journalEntries = await prisma.journalEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const journalEntryWithIdOnly = await prisma.journalEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JournalEntryFindManyArgs>(args?: SelectSubset<T, JournalEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JournalEntry.
     * @param {JournalEntryCreateArgs} args - Arguments to create a JournalEntry.
     * @example
     * // Create one JournalEntry
     * const JournalEntry = await prisma.journalEntry.create({
     *   data: {
     *     // ... data to create a JournalEntry
     *   }
     * })
     * 
     */
    create<T extends JournalEntryCreateArgs>(args: SelectSubset<T, JournalEntryCreateArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JournalEntries.
     * @param {JournalEntryCreateManyArgs} args - Arguments to create many JournalEntries.
     * @example
     * // Create many JournalEntries
     * const journalEntry = await prisma.journalEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JournalEntryCreateManyArgs>(args?: SelectSubset<T, JournalEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JournalEntries and returns the data saved in the database.
     * @param {JournalEntryCreateManyAndReturnArgs} args - Arguments to create many JournalEntries.
     * @example
     * // Create many JournalEntries
     * const journalEntry = await prisma.journalEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JournalEntries and only return the `id`
     * const journalEntryWithIdOnly = await prisma.journalEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JournalEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, JournalEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JournalEntry.
     * @param {JournalEntryDeleteArgs} args - Arguments to delete one JournalEntry.
     * @example
     * // Delete one JournalEntry
     * const JournalEntry = await prisma.journalEntry.delete({
     *   where: {
     *     // ... filter to delete one JournalEntry
     *   }
     * })
     * 
     */
    delete<T extends JournalEntryDeleteArgs>(args: SelectSubset<T, JournalEntryDeleteArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JournalEntry.
     * @param {JournalEntryUpdateArgs} args - Arguments to update one JournalEntry.
     * @example
     * // Update one JournalEntry
     * const journalEntry = await prisma.journalEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JournalEntryUpdateArgs>(args: SelectSubset<T, JournalEntryUpdateArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JournalEntries.
     * @param {JournalEntryDeleteManyArgs} args - Arguments to filter JournalEntries to delete.
     * @example
     * // Delete a few JournalEntries
     * const { count } = await prisma.journalEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JournalEntryDeleteManyArgs>(args?: SelectSubset<T, JournalEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JournalEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JournalEntries
     * const journalEntry = await prisma.journalEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JournalEntryUpdateManyArgs>(args: SelectSubset<T, JournalEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JournalEntries and returns the data updated in the database.
     * @param {JournalEntryUpdateManyAndReturnArgs} args - Arguments to update many JournalEntries.
     * @example
     * // Update many JournalEntries
     * const journalEntry = await prisma.journalEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JournalEntries and only return the `id`
     * const journalEntryWithIdOnly = await prisma.journalEntry.updateManyAndReturn({
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
    updateManyAndReturn<T extends JournalEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, JournalEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JournalEntry.
     * @param {JournalEntryUpsertArgs} args - Arguments to update or create a JournalEntry.
     * @example
     * // Update or create a JournalEntry
     * const journalEntry = await prisma.journalEntry.upsert({
     *   create: {
     *     // ... data to create a JournalEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JournalEntry we want to update
     *   }
     * })
     */
    upsert<T extends JournalEntryUpsertArgs>(args: SelectSubset<T, JournalEntryUpsertArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JournalEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryCountArgs} args - Arguments to filter JournalEntries to count.
     * @example
     * // Count the number of JournalEntries
     * const count = await prisma.journalEntry.count({
     *   where: {
     *     // ... the filter for the JournalEntries we want to count
     *   }
     * })
    **/
    count<T extends JournalEntryCountArgs>(
      args?: Subset<T, JournalEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JournalEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JournalEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JournalEntryAggregateArgs>(args: Subset<T, JournalEntryAggregateArgs>): Prisma.PrismaPromise<GetJournalEntryAggregateType<T>>

    /**
     * Group by JournalEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryGroupByArgs} args - Group by arguments.
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
      T extends JournalEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JournalEntryGroupByArgs['orderBy'] }
        : { orderBy?: JournalEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JournalEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJournalEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JournalEntry model
   */
  readonly fields: JournalEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JournalEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JournalEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the JournalEntry model
   */
  interface JournalEntryFieldRefs {
    readonly id: FieldRef<"JournalEntry", 'String'>
    readonly userId: FieldRef<"JournalEntry", 'String'>
    readonly createdAt: FieldRef<"JournalEntry", 'DateTime'>
    readonly title: FieldRef<"JournalEntry", 'String'>
    readonly body: FieldRef<"JournalEntry", 'String'>
  }
    

  // Custom InputTypes
  /**
   * JournalEntry findUnique
   */
  export type JournalEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntry to fetch.
     */
    where: JournalEntryWhereUniqueInput
  }

  /**
   * JournalEntry findUniqueOrThrow
   */
  export type JournalEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntry to fetch.
     */
    where: JournalEntryWhereUniqueInput
  }

  /**
   * JournalEntry findFirst
   */
  export type JournalEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntry to fetch.
     */
    where?: JournalEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalEntries to fetch.
     */
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JournalEntries.
     */
    cursor?: JournalEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JournalEntries.
     */
    distinct?: JournalEntryScalarFieldEnum | JournalEntryScalarFieldEnum[]
  }

  /**
   * JournalEntry findFirstOrThrow
   */
  export type JournalEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntry to fetch.
     */
    where?: JournalEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalEntries to fetch.
     */
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JournalEntries.
     */
    cursor?: JournalEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JournalEntries.
     */
    distinct?: JournalEntryScalarFieldEnum | JournalEntryScalarFieldEnum[]
  }

  /**
   * JournalEntry findMany
   */
  export type JournalEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntries to fetch.
     */
    where?: JournalEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalEntries to fetch.
     */
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JournalEntries.
     */
    cursor?: JournalEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalEntries.
     */
    skip?: number
    distinct?: JournalEntryScalarFieldEnum | JournalEntryScalarFieldEnum[]
  }

  /**
   * JournalEntry create
   */
  export type JournalEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a JournalEntry.
     */
    data: XOR<JournalEntryCreateInput, JournalEntryUncheckedCreateInput>
  }

  /**
   * JournalEntry createMany
   */
  export type JournalEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JournalEntries.
     */
    data: JournalEntryCreateManyInput | JournalEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JournalEntry createManyAndReturn
   */
  export type JournalEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * The data used to create many JournalEntries.
     */
    data: JournalEntryCreateManyInput | JournalEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JournalEntry update
   */
  export type JournalEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a JournalEntry.
     */
    data: XOR<JournalEntryUpdateInput, JournalEntryUncheckedUpdateInput>
    /**
     * Choose, which JournalEntry to update.
     */
    where: JournalEntryWhereUniqueInput
  }

  /**
   * JournalEntry updateMany
   */
  export type JournalEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JournalEntries.
     */
    data: XOR<JournalEntryUpdateManyMutationInput, JournalEntryUncheckedUpdateManyInput>
    /**
     * Filter which JournalEntries to update
     */
    where?: JournalEntryWhereInput
    /**
     * Limit how many JournalEntries to update.
     */
    limit?: number
  }

  /**
   * JournalEntry updateManyAndReturn
   */
  export type JournalEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * The data used to update JournalEntries.
     */
    data: XOR<JournalEntryUpdateManyMutationInput, JournalEntryUncheckedUpdateManyInput>
    /**
     * Filter which JournalEntries to update
     */
    where?: JournalEntryWhereInput
    /**
     * Limit how many JournalEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JournalEntry upsert
   */
  export type JournalEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the JournalEntry to update in case it exists.
     */
    where: JournalEntryWhereUniqueInput
    /**
     * In case the JournalEntry found by the `where` argument doesn't exist, create a new JournalEntry with this data.
     */
    create: XOR<JournalEntryCreateInput, JournalEntryUncheckedCreateInput>
    /**
     * In case the JournalEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JournalEntryUpdateInput, JournalEntryUncheckedUpdateInput>
  }

  /**
   * JournalEntry delete
   */
  export type JournalEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter which JournalEntry to delete.
     */
    where: JournalEntryWhereUniqueInput
  }

  /**
   * JournalEntry deleteMany
   */
  export type JournalEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JournalEntries to delete
     */
    where?: JournalEntryWhereInput
    /**
     * Limit how many JournalEntries to delete.
     */
    limit?: number
  }

  /**
   * JournalEntry without action
   */
  export type JournalEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
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


  export const TrigramScalarFieldEnum: {
    id: 'id',
    key: 'key',
    name: 'name',
    meaning: 'meaning'
  };

  export type TrigramScalarFieldEnum = (typeof TrigramScalarFieldEnum)[keyof typeof TrigramScalarFieldEnum]


  export const HexagramScalarFieldEnum: {
    id: 'id',
    key: 'key',
    slug: 'slug',
    name: 'name',
    judgment: 'judgment',
    imageText: 'imageText',
    comment: 'comment',
    footnote: 'footnote',
    tags: 'tags',
    upperTrigramId: 'upperTrigramId',
    lowerTrigramId: 'lowerTrigramId'
  };

  export type HexagramScalarFieldEnum = (typeof HexagramScalarFieldEnum)[keyof typeof HexagramScalarFieldEnum]


  export const LineScalarFieldEnum: {
    id: 'id',
    hexagramId: 'hexagramId',
    number: 'number',
    text: 'text'
  };

  export type LineScalarFieldEnum = (typeof LineScalarFieldEnum)[keyof typeof LineScalarFieldEnum]


  export const ContentSourceScalarFieldEnum: {
    id: 'id',
    key: 'key',
    payload: 'payload',
    version: 'version',
    importedAt: 'importedAt'
  };

  export type ContentSourceScalarFieldEnum = (typeof ContentSourceScalarFieldEnum)[keyof typeof ContentSourceScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    image: 'image',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const ReadingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    method: 'method',
    seed: 'seed',
    tossesJson: 'tossesJson',
    movingLines: 'movingLines',
    baseHexagramId: 'baseHexagramId',
    resultHexagramId: 'resultHexagramId',
    question: 'question',
    notes: 'notes'
  };

  export type ReadingScalarFieldEnum = (typeof ReadingScalarFieldEnum)[keyof typeof ReadingScalarFieldEnum]


  export const ChatSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    readingId: 'readingId',
    createdAt: 'createdAt'
  };

  export type ChatSessionScalarFieldEnum = (typeof ChatSessionScalarFieldEnum)[keyof typeof ChatSessionScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    role: 'role',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const ShareLinkScalarFieldEnum: {
    id: 'id',
    readingId: 'readingId',
    token: 'token',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type ShareLinkScalarFieldEnum = (typeof ShareLinkScalarFieldEnum)[keyof typeof ShareLinkScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    readingId: 'readingId',
    createdAt: 'createdAt'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const JournalEntryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    title: 'title',
    body: 'body'
  };

  export type JournalEntryScalarFieldEnum = (typeof JournalEntryScalarFieldEnum)[keyof typeof JournalEntryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type TrigramWhereInput = {
    AND?: TrigramWhereInput | TrigramWhereInput[]
    OR?: TrigramWhereInput[]
    NOT?: TrigramWhereInput | TrigramWhereInput[]
    id?: IntFilter<"Trigram"> | number
    key?: StringFilter<"Trigram"> | string
    name?: StringFilter<"Trigram"> | string
    meaning?: StringNullableFilter<"Trigram"> | string | null
    upperOf?: HexagramListRelationFilter
    lowerOf?: HexagramListRelationFilter
  }

  export type TrigramOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    meaning?: SortOrderInput | SortOrder
    upperOf?: HexagramOrderByRelationAggregateInput
    lowerOf?: HexagramOrderByRelationAggregateInput
  }

  export type TrigramWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    key?: string
    AND?: TrigramWhereInput | TrigramWhereInput[]
    OR?: TrigramWhereInput[]
    NOT?: TrigramWhereInput | TrigramWhereInput[]
    name?: StringFilter<"Trigram"> | string
    meaning?: StringNullableFilter<"Trigram"> | string | null
    upperOf?: HexagramListRelationFilter
    lowerOf?: HexagramListRelationFilter
  }, "id" | "key">

  export type TrigramOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    meaning?: SortOrderInput | SortOrder
    _count?: TrigramCountOrderByAggregateInput
    _avg?: TrigramAvgOrderByAggregateInput
    _max?: TrigramMaxOrderByAggregateInput
    _min?: TrigramMinOrderByAggregateInput
    _sum?: TrigramSumOrderByAggregateInput
  }

  export type TrigramScalarWhereWithAggregatesInput = {
    AND?: TrigramScalarWhereWithAggregatesInput | TrigramScalarWhereWithAggregatesInput[]
    OR?: TrigramScalarWhereWithAggregatesInput[]
    NOT?: TrigramScalarWhereWithAggregatesInput | TrigramScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Trigram"> | number
    key?: StringWithAggregatesFilter<"Trigram"> | string
    name?: StringWithAggregatesFilter<"Trigram"> | string
    meaning?: StringNullableWithAggregatesFilter<"Trigram"> | string | null
  }

  export type HexagramWhereInput = {
    AND?: HexagramWhereInput | HexagramWhereInput[]
    OR?: HexagramWhereInput[]
    NOT?: HexagramWhereInput | HexagramWhereInput[]
    id?: IntFilter<"Hexagram"> | number
    key?: StringFilter<"Hexagram"> | string
    slug?: StringFilter<"Hexagram"> | string
    name?: StringFilter<"Hexagram"> | string
    judgment?: StringFilter<"Hexagram"> | string
    imageText?: StringNullableFilter<"Hexagram"> | string | null
    comment?: StringNullableFilter<"Hexagram"> | string | null
    footnote?: StringNullableFilter<"Hexagram"> | string | null
    tags?: StringNullableListFilter<"Hexagram">
    upperTrigramId?: IntFilter<"Hexagram"> | number
    lowerTrigramId?: IntFilter<"Hexagram"> | number
    upperTrigram?: XOR<TrigramScalarRelationFilter, TrigramWhereInput>
    lowerTrigram?: XOR<TrigramScalarRelationFilter, TrigramWhereInput>
    lines?: LineListRelationFilter
    baseForReadings?: ReadingListRelationFilter
    resultForReadings?: ReadingListRelationFilter
  }

  export type HexagramOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    judgment?: SortOrder
    imageText?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    footnote?: SortOrderInput | SortOrder
    tags?: SortOrder
    upperTrigramId?: SortOrder
    lowerTrigramId?: SortOrder
    upperTrigram?: TrigramOrderByWithRelationInput
    lowerTrigram?: TrigramOrderByWithRelationInput
    lines?: LineOrderByRelationAggregateInput
    baseForReadings?: ReadingOrderByRelationAggregateInput
    resultForReadings?: ReadingOrderByRelationAggregateInput
  }

  export type HexagramWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    key?: string
    slug?: string
    AND?: HexagramWhereInput | HexagramWhereInput[]
    OR?: HexagramWhereInput[]
    NOT?: HexagramWhereInput | HexagramWhereInput[]
    name?: StringFilter<"Hexagram"> | string
    judgment?: StringFilter<"Hexagram"> | string
    imageText?: StringNullableFilter<"Hexagram"> | string | null
    comment?: StringNullableFilter<"Hexagram"> | string | null
    footnote?: StringNullableFilter<"Hexagram"> | string | null
    tags?: StringNullableListFilter<"Hexagram">
    upperTrigramId?: IntFilter<"Hexagram"> | number
    lowerTrigramId?: IntFilter<"Hexagram"> | number
    upperTrigram?: XOR<TrigramScalarRelationFilter, TrigramWhereInput>
    lowerTrigram?: XOR<TrigramScalarRelationFilter, TrigramWhereInput>
    lines?: LineListRelationFilter
    baseForReadings?: ReadingListRelationFilter
    resultForReadings?: ReadingListRelationFilter
  }, "id" | "key" | "slug">

  export type HexagramOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    judgment?: SortOrder
    imageText?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    footnote?: SortOrderInput | SortOrder
    tags?: SortOrder
    upperTrigramId?: SortOrder
    lowerTrigramId?: SortOrder
    _count?: HexagramCountOrderByAggregateInput
    _avg?: HexagramAvgOrderByAggregateInput
    _max?: HexagramMaxOrderByAggregateInput
    _min?: HexagramMinOrderByAggregateInput
    _sum?: HexagramSumOrderByAggregateInput
  }

  export type HexagramScalarWhereWithAggregatesInput = {
    AND?: HexagramScalarWhereWithAggregatesInput | HexagramScalarWhereWithAggregatesInput[]
    OR?: HexagramScalarWhereWithAggregatesInput[]
    NOT?: HexagramScalarWhereWithAggregatesInput | HexagramScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hexagram"> | number
    key?: StringWithAggregatesFilter<"Hexagram"> | string
    slug?: StringWithAggregatesFilter<"Hexagram"> | string
    name?: StringWithAggregatesFilter<"Hexagram"> | string
    judgment?: StringWithAggregatesFilter<"Hexagram"> | string
    imageText?: StringNullableWithAggregatesFilter<"Hexagram"> | string | null
    comment?: StringNullableWithAggregatesFilter<"Hexagram"> | string | null
    footnote?: StringNullableWithAggregatesFilter<"Hexagram"> | string | null
    tags?: StringNullableListFilter<"Hexagram">
    upperTrigramId?: IntWithAggregatesFilter<"Hexagram"> | number
    lowerTrigramId?: IntWithAggregatesFilter<"Hexagram"> | number
  }

  export type LineWhereInput = {
    AND?: LineWhereInput | LineWhereInput[]
    OR?: LineWhereInput[]
    NOT?: LineWhereInput | LineWhereInput[]
    id?: IntFilter<"Line"> | number
    hexagramId?: IntFilter<"Line"> | number
    number?: IntFilter<"Line"> | number
    text?: StringFilter<"Line"> | string
    Hexagram?: XOR<HexagramScalarRelationFilter, HexagramWhereInput>
  }

  export type LineOrderByWithRelationInput = {
    id?: SortOrder
    hexagramId?: SortOrder
    number?: SortOrder
    text?: SortOrder
    Hexagram?: HexagramOrderByWithRelationInput
  }

  export type LineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    hexagramId_number?: LineHexagramIdNumberCompoundUniqueInput
    AND?: LineWhereInput | LineWhereInput[]
    OR?: LineWhereInput[]
    NOT?: LineWhereInput | LineWhereInput[]
    hexagramId?: IntFilter<"Line"> | number
    number?: IntFilter<"Line"> | number
    text?: StringFilter<"Line"> | string
    Hexagram?: XOR<HexagramScalarRelationFilter, HexagramWhereInput>
  }, "id" | "hexagramId_number">

  export type LineOrderByWithAggregationInput = {
    id?: SortOrder
    hexagramId?: SortOrder
    number?: SortOrder
    text?: SortOrder
    _count?: LineCountOrderByAggregateInput
    _avg?: LineAvgOrderByAggregateInput
    _max?: LineMaxOrderByAggregateInput
    _min?: LineMinOrderByAggregateInput
    _sum?: LineSumOrderByAggregateInput
  }

  export type LineScalarWhereWithAggregatesInput = {
    AND?: LineScalarWhereWithAggregatesInput | LineScalarWhereWithAggregatesInput[]
    OR?: LineScalarWhereWithAggregatesInput[]
    NOT?: LineScalarWhereWithAggregatesInput | LineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Line"> | number
    hexagramId?: IntWithAggregatesFilter<"Line"> | number
    number?: IntWithAggregatesFilter<"Line"> | number
    text?: StringWithAggregatesFilter<"Line"> | string
  }

  export type ContentSourceWhereInput = {
    AND?: ContentSourceWhereInput | ContentSourceWhereInput[]
    OR?: ContentSourceWhereInput[]
    NOT?: ContentSourceWhereInput | ContentSourceWhereInput[]
    id?: StringFilter<"ContentSource"> | string
    key?: StringFilter<"ContentSource"> | string
    payload?: JsonFilter<"ContentSource">
    version?: StringFilter<"ContentSource"> | string
    importedAt?: DateTimeFilter<"ContentSource"> | Date | string
  }

  export type ContentSourceOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    payload?: SortOrder
    version?: SortOrder
    importedAt?: SortOrder
  }

  export type ContentSourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: ContentSourceWhereInput | ContentSourceWhereInput[]
    OR?: ContentSourceWhereInput[]
    NOT?: ContentSourceWhereInput | ContentSourceWhereInput[]
    payload?: JsonFilter<"ContentSource">
    version?: StringFilter<"ContentSource"> | string
    importedAt?: DateTimeFilter<"ContentSource"> | Date | string
  }, "id" | "key">

  export type ContentSourceOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    payload?: SortOrder
    version?: SortOrder
    importedAt?: SortOrder
    _count?: ContentSourceCountOrderByAggregateInput
    _max?: ContentSourceMaxOrderByAggregateInput
    _min?: ContentSourceMinOrderByAggregateInput
  }

  export type ContentSourceScalarWhereWithAggregatesInput = {
    AND?: ContentSourceScalarWhereWithAggregatesInput | ContentSourceScalarWhereWithAggregatesInput[]
    OR?: ContentSourceScalarWhereWithAggregatesInput[]
    NOT?: ContentSourceScalarWhereWithAggregatesInput | ContentSourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContentSource"> | string
    key?: StringWithAggregatesFilter<"ContentSource"> | string
    payload?: JsonWithAggregatesFilter<"ContentSource">
    version?: StringWithAggregatesFilter<"ContentSource"> | string
    importedAt?: DateTimeWithAggregatesFilter<"ContentSource"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    readings?: ReadingListRelationFilter
    chats?: ChatSessionListRelationFilter
    favorites?: FavoriteListRelationFilter
    journal?: JournalEntryListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    readings?: ReadingOrderByRelationAggregateInput
    chats?: ChatSessionOrderByRelationAggregateInput
    favorites?: FavoriteOrderByRelationAggregateInput
    journal?: JournalEntryOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    readings?: ReadingListRelationFilter
    chats?: ChatSessionListRelationFilter
    favorites?: FavoriteListRelationFilter
    journal?: JournalEntryListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type ReadingWhereInput = {
    AND?: ReadingWhereInput | ReadingWhereInput[]
    OR?: ReadingWhereInput[]
    NOT?: ReadingWhereInput | ReadingWhereInput[]
    id?: StringFilter<"Reading"> | string
    userId?: StringNullableFilter<"Reading"> | string | null
    createdAt?: DateTimeFilter<"Reading"> | Date | string
    method?: StringFilter<"Reading"> | string
    seed?: StringNullableFilter<"Reading"> | string | null
    tossesJson?: JsonFilter<"Reading">
    movingLines?: IntNullableListFilter<"Reading">
    baseHexagramId?: IntFilter<"Reading"> | number
    resultHexagramId?: IntFilter<"Reading"> | number
    question?: StringNullableFilter<"Reading"> | string | null
    notes?: StringNullableFilter<"Reading"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    baseHexagram?: XOR<HexagramScalarRelationFilter, HexagramWhereInput>
    resultHexagram?: XOR<HexagramScalarRelationFilter, HexagramWhereInput>
    chats?: ChatSessionListRelationFilter
    shares?: ShareLinkListRelationFilter
    favorites?: FavoriteListRelationFilter
  }

  export type ReadingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    method?: SortOrder
    seed?: SortOrderInput | SortOrder
    tossesJson?: SortOrder
    movingLines?: SortOrder
    baseHexagramId?: SortOrder
    resultHexagramId?: SortOrder
    question?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
    baseHexagram?: HexagramOrderByWithRelationInput
    resultHexagram?: HexagramOrderByWithRelationInput
    chats?: ChatSessionOrderByRelationAggregateInput
    shares?: ShareLinkOrderByRelationAggregateInput
    favorites?: FavoriteOrderByRelationAggregateInput
  }

  export type ReadingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReadingWhereInput | ReadingWhereInput[]
    OR?: ReadingWhereInput[]
    NOT?: ReadingWhereInput | ReadingWhereInput[]
    userId?: StringNullableFilter<"Reading"> | string | null
    createdAt?: DateTimeFilter<"Reading"> | Date | string
    method?: StringFilter<"Reading"> | string
    seed?: StringNullableFilter<"Reading"> | string | null
    tossesJson?: JsonFilter<"Reading">
    movingLines?: IntNullableListFilter<"Reading">
    baseHexagramId?: IntFilter<"Reading"> | number
    resultHexagramId?: IntFilter<"Reading"> | number
    question?: StringNullableFilter<"Reading"> | string | null
    notes?: StringNullableFilter<"Reading"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    baseHexagram?: XOR<HexagramScalarRelationFilter, HexagramWhereInput>
    resultHexagram?: XOR<HexagramScalarRelationFilter, HexagramWhereInput>
    chats?: ChatSessionListRelationFilter
    shares?: ShareLinkListRelationFilter
    favorites?: FavoriteListRelationFilter
  }, "id">

  export type ReadingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    method?: SortOrder
    seed?: SortOrderInput | SortOrder
    tossesJson?: SortOrder
    movingLines?: SortOrder
    baseHexagramId?: SortOrder
    resultHexagramId?: SortOrder
    question?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: ReadingCountOrderByAggregateInput
    _avg?: ReadingAvgOrderByAggregateInput
    _max?: ReadingMaxOrderByAggregateInput
    _min?: ReadingMinOrderByAggregateInput
    _sum?: ReadingSumOrderByAggregateInput
  }

  export type ReadingScalarWhereWithAggregatesInput = {
    AND?: ReadingScalarWhereWithAggregatesInput | ReadingScalarWhereWithAggregatesInput[]
    OR?: ReadingScalarWhereWithAggregatesInput[]
    NOT?: ReadingScalarWhereWithAggregatesInput | ReadingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reading"> | string
    userId?: StringNullableWithAggregatesFilter<"Reading"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Reading"> | Date | string
    method?: StringWithAggregatesFilter<"Reading"> | string
    seed?: StringNullableWithAggregatesFilter<"Reading"> | string | null
    tossesJson?: JsonWithAggregatesFilter<"Reading">
    movingLines?: IntNullableListFilter<"Reading">
    baseHexagramId?: IntWithAggregatesFilter<"Reading"> | number
    resultHexagramId?: IntWithAggregatesFilter<"Reading"> | number
    question?: StringNullableWithAggregatesFilter<"Reading"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Reading"> | string | null
  }

  export type ChatSessionWhereInput = {
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    id?: StringFilter<"ChatSession"> | string
    userId?: StringNullableFilter<"ChatSession"> | string | null
    readingId?: StringFilter<"ChatSession"> | string
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Reading?: XOR<ReadingScalarRelationFilter, ReadingWhereInput>
    messages?: ChatMessageListRelationFilter
  }

  export type ChatSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    readingId?: SortOrder
    createdAt?: SortOrder
    User?: UserOrderByWithRelationInput
    Reading?: ReadingOrderByWithRelationInput
    messages?: ChatMessageOrderByRelationAggregateInput
  }

  export type ChatSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    userId?: StringNullableFilter<"ChatSession"> | string | null
    readingId?: StringFilter<"ChatSession"> | string
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Reading?: XOR<ReadingScalarRelationFilter, ReadingWhereInput>
    messages?: ChatMessageListRelationFilter
  }, "id">

  export type ChatSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    readingId?: SortOrder
    createdAt?: SortOrder
    _count?: ChatSessionCountOrderByAggregateInput
    _max?: ChatSessionMaxOrderByAggregateInput
    _min?: ChatSessionMinOrderByAggregateInput
  }

  export type ChatSessionScalarWhereWithAggregatesInput = {
    AND?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    OR?: ChatSessionScalarWhereWithAggregatesInput[]
    NOT?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatSession"> | string
    userId?: StringNullableWithAggregatesFilter<"ChatSession"> | string | null
    readingId?: StringWithAggregatesFilter<"ChatSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatSession"> | Date | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    sessionId?: StringFilter<"ChatMessage"> | string
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    Session?: XOR<ChatSessionScalarRelationFilter, ChatSessionWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    Session?: ChatSessionOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    sessionId?: StringFilter<"ChatMessage"> | string
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    Session?: XOR<ChatSessionScalarRelationFilter, ChatSessionWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    sessionId?: StringWithAggregatesFilter<"ChatMessage"> | string
    role?: StringWithAggregatesFilter<"ChatMessage"> | string
    content?: StringWithAggregatesFilter<"ChatMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type ShareLinkWhereInput = {
    AND?: ShareLinkWhereInput | ShareLinkWhereInput[]
    OR?: ShareLinkWhereInput[]
    NOT?: ShareLinkWhereInput | ShareLinkWhereInput[]
    id?: StringFilter<"ShareLink"> | string
    readingId?: StringFilter<"ShareLink"> | string
    token?: StringFilter<"ShareLink"> | string
    createdAt?: DateTimeFilter<"ShareLink"> | Date | string
    expiresAt?: DateTimeNullableFilter<"ShareLink"> | Date | string | null
    Reading?: XOR<ReadingScalarRelationFilter, ReadingWhereInput>
  }

  export type ShareLinkOrderByWithRelationInput = {
    id?: SortOrder
    readingId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    Reading?: ReadingOrderByWithRelationInput
  }

  export type ShareLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: ShareLinkWhereInput | ShareLinkWhereInput[]
    OR?: ShareLinkWhereInput[]
    NOT?: ShareLinkWhereInput | ShareLinkWhereInput[]
    readingId?: StringFilter<"ShareLink"> | string
    createdAt?: DateTimeFilter<"ShareLink"> | Date | string
    expiresAt?: DateTimeNullableFilter<"ShareLink"> | Date | string | null
    Reading?: XOR<ReadingScalarRelationFilter, ReadingWhereInput>
  }, "id" | "token">

  export type ShareLinkOrderByWithAggregationInput = {
    id?: SortOrder
    readingId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    _count?: ShareLinkCountOrderByAggregateInput
    _max?: ShareLinkMaxOrderByAggregateInput
    _min?: ShareLinkMinOrderByAggregateInput
  }

  export type ShareLinkScalarWhereWithAggregatesInput = {
    AND?: ShareLinkScalarWhereWithAggregatesInput | ShareLinkScalarWhereWithAggregatesInput[]
    OR?: ShareLinkScalarWhereWithAggregatesInput[]
    NOT?: ShareLinkScalarWhereWithAggregatesInput | ShareLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShareLink"> | string
    readingId?: StringWithAggregatesFilter<"ShareLink"> | string
    token?: StringWithAggregatesFilter<"ShareLink"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ShareLink"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"ShareLink"> | Date | string | null
  }

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    id?: StringFilter<"Favorite"> | string
    userId?: StringFilter<"Favorite"> | string
    readingId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Reading?: XOR<ReadingScalarRelationFilter, ReadingWhereInput>
  }

  export type FavoriteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    readingId?: SortOrder
    createdAt?: SortOrder
    User?: UserOrderByWithRelationInput
    Reading?: ReadingOrderByWithRelationInput
  }

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_readingId?: FavoriteUserIdReadingIdCompoundUniqueInput
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    userId?: StringFilter<"Favorite"> | string
    readingId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Reading?: XOR<ReadingScalarRelationFilter, ReadingWhereInput>
  }, "id" | "userId_readingId">

  export type FavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    readingId?: SortOrder
    createdAt?: SortOrder
    _count?: FavoriteCountOrderByAggregateInput
    _max?: FavoriteMaxOrderByAggregateInput
    _min?: FavoriteMinOrderByAggregateInput
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    OR?: FavoriteScalarWhereWithAggregatesInput[]
    NOT?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Favorite"> | string
    userId?: StringWithAggregatesFilter<"Favorite"> | string
    readingId?: StringWithAggregatesFilter<"Favorite"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Favorite"> | Date | string
  }

  export type JournalEntryWhereInput = {
    AND?: JournalEntryWhereInput | JournalEntryWhereInput[]
    OR?: JournalEntryWhereInput[]
    NOT?: JournalEntryWhereInput | JournalEntryWhereInput[]
    id?: StringFilter<"JournalEntry"> | string
    userId?: StringFilter<"JournalEntry"> | string
    createdAt?: DateTimeFilter<"JournalEntry"> | Date | string
    title?: StringNullableFilter<"JournalEntry"> | string | null
    body?: StringFilter<"JournalEntry"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type JournalEntryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    title?: SortOrderInput | SortOrder
    body?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type JournalEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JournalEntryWhereInput | JournalEntryWhereInput[]
    OR?: JournalEntryWhereInput[]
    NOT?: JournalEntryWhereInput | JournalEntryWhereInput[]
    userId?: StringFilter<"JournalEntry"> | string
    createdAt?: DateTimeFilter<"JournalEntry"> | Date | string
    title?: StringNullableFilter<"JournalEntry"> | string | null
    body?: StringFilter<"JournalEntry"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type JournalEntryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    title?: SortOrderInput | SortOrder
    body?: SortOrder
    _count?: JournalEntryCountOrderByAggregateInput
    _max?: JournalEntryMaxOrderByAggregateInput
    _min?: JournalEntryMinOrderByAggregateInput
  }

  export type JournalEntryScalarWhereWithAggregatesInput = {
    AND?: JournalEntryScalarWhereWithAggregatesInput | JournalEntryScalarWhereWithAggregatesInput[]
    OR?: JournalEntryScalarWhereWithAggregatesInput[]
    NOT?: JournalEntryScalarWhereWithAggregatesInput | JournalEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JournalEntry"> | string
    userId?: StringWithAggregatesFilter<"JournalEntry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"JournalEntry"> | Date | string
    title?: StringNullableWithAggregatesFilter<"JournalEntry"> | string | null
    body?: StringWithAggregatesFilter<"JournalEntry"> | string
  }

  export type TrigramCreateInput = {
    id: number
    key: string
    name: string
    meaning?: string | null
    upperOf?: HexagramCreateNestedManyWithoutUpperTrigramInput
    lowerOf?: HexagramCreateNestedManyWithoutLowerTrigramInput
  }

  export type TrigramUncheckedCreateInput = {
    id: number
    key: string
    name: string
    meaning?: string | null
    upperOf?: HexagramUncheckedCreateNestedManyWithoutUpperTrigramInput
    lowerOf?: HexagramUncheckedCreateNestedManyWithoutLowerTrigramInput
  }

  export type TrigramUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    meaning?: NullableStringFieldUpdateOperationsInput | string | null
    upperOf?: HexagramUpdateManyWithoutUpperTrigramNestedInput
    lowerOf?: HexagramUpdateManyWithoutLowerTrigramNestedInput
  }

  export type TrigramUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    meaning?: NullableStringFieldUpdateOperationsInput | string | null
    upperOf?: HexagramUncheckedUpdateManyWithoutUpperTrigramNestedInput
    lowerOf?: HexagramUncheckedUpdateManyWithoutLowerTrigramNestedInput
  }

  export type TrigramCreateManyInput = {
    id: number
    key: string
    name: string
    meaning?: string | null
  }

  export type TrigramUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    meaning?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrigramUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    meaning?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HexagramCreateInput = {
    id: number
    key: string
    slug: string
    name: string
    judgment: string
    imageText?: string | null
    comment?: string | null
    footnote?: string | null
    tags?: HexagramCreatetagsInput | string[]
    upperTrigram: TrigramCreateNestedOneWithoutUpperOfInput
    lowerTrigram: TrigramCreateNestedOneWithoutLowerOfInput
    lines?: LineCreateNestedManyWithoutHexagramInput
    baseForReadings?: ReadingCreateNestedManyWithoutBaseHexagramInput
    resultForReadings?: ReadingCreateNestedManyWithoutResultHexagramInput
  }

  export type HexagramUncheckedCreateInput = {
    id: number
    key: string
    slug: string
    name: string
    judgment: string
    imageText?: string | null
    comment?: string | null
    footnote?: string | null
    tags?: HexagramCreatetagsInput | string[]
    upperTrigramId: number
    lowerTrigramId: number
    lines?: LineUncheckedCreateNestedManyWithoutHexagramInput
    baseForReadings?: ReadingUncheckedCreateNestedManyWithoutBaseHexagramInput
    resultForReadings?: ReadingUncheckedCreateNestedManyWithoutResultHexagramInput
  }

  export type HexagramUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    judgment?: StringFieldUpdateOperationsInput | string
    imageText?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    footnote?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: HexagramUpdatetagsInput | string[]
    upperTrigram?: TrigramUpdateOneRequiredWithoutUpperOfNestedInput
    lowerTrigram?: TrigramUpdateOneRequiredWithoutLowerOfNestedInput
    lines?: LineUpdateManyWithoutHexagramNestedInput
    baseForReadings?: ReadingUpdateManyWithoutBaseHexagramNestedInput
    resultForReadings?: ReadingUpdateManyWithoutResultHexagramNestedInput
  }

  export type HexagramUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    judgment?: StringFieldUpdateOperationsInput | string
    imageText?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    footnote?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: HexagramUpdatetagsInput | string[]
    upperTrigramId?: IntFieldUpdateOperationsInput | number
    lowerTrigramId?: IntFieldUpdateOperationsInput | number
    lines?: LineUncheckedUpdateManyWithoutHexagramNestedInput
    baseForReadings?: ReadingUncheckedUpdateManyWithoutBaseHexagramNestedInput
    resultForReadings?: ReadingUncheckedUpdateManyWithoutResultHexagramNestedInput
  }

  export type HexagramCreateManyInput = {
    id: number
    key: string
    slug: string
    name: string
    judgment: string
    imageText?: string | null
    comment?: string | null
    footnote?: string | null
    tags?: HexagramCreatetagsInput | string[]
    upperTrigramId: number
    lowerTrigramId: number
  }

  export type HexagramUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    judgment?: StringFieldUpdateOperationsInput | string
    imageText?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    footnote?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: HexagramUpdatetagsInput | string[]
  }

  export type HexagramUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    judgment?: StringFieldUpdateOperationsInput | string
    imageText?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    footnote?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: HexagramUpdatetagsInput | string[]
    upperTrigramId?: IntFieldUpdateOperationsInput | number
    lowerTrigramId?: IntFieldUpdateOperationsInput | number
  }

  export type LineCreateInput = {
    number: number
    text: string
    Hexagram: HexagramCreateNestedOneWithoutLinesInput
  }

  export type LineUncheckedCreateInput = {
    id?: number
    hexagramId: number
    number: number
    text: string
  }

  export type LineUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    Hexagram?: HexagramUpdateOneRequiredWithoutLinesNestedInput
  }

  export type LineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hexagramId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type LineCreateManyInput = {
    id?: number
    hexagramId: number
    number: number
    text: string
  }

  export type LineUpdateManyMutationInput = {
    number?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type LineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hexagramId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ContentSourceCreateInput = {
    id?: string
    key: string
    payload: JsonNullValueInput | InputJsonValue
    version: string
    importedAt?: Date | string
  }

  export type ContentSourceUncheckedCreateInput = {
    id?: string
    key: string
    payload: JsonNullValueInput | InputJsonValue
    version: string
    importedAt?: Date | string
  }

  export type ContentSourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    version?: StringFieldUpdateOperationsInput | string
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentSourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    version?: StringFieldUpdateOperationsInput | string
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentSourceCreateManyInput = {
    id?: string
    key: string
    payload: JsonNullValueInput | InputJsonValue
    version: string
    importedAt?: Date | string
  }

  export type ContentSourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    version?: StringFieldUpdateOperationsInput | string
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentSourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    version?: StringFieldUpdateOperationsInput | string
    importedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string
    readings?: ReadingCreateNestedManyWithoutUserInput
    chats?: ChatSessionCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    journal?: JournalEntryCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string
    readings?: ReadingUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    journal?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: ReadingUpdateManyWithoutUserNestedInput
    chats?: ChatSessionUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    journal?: JournalEntryUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: ReadingUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    journal?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReadingCreateInput = {
    id?: string
    createdAt?: Date | string
    method: string
    seed?: string | null
    tossesJson: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingCreatemovingLinesInput | number[]
    question?: string | null
    notes?: string | null
    User?: UserCreateNestedOneWithoutReadingsInput
    baseHexagram: HexagramCreateNestedOneWithoutBaseForReadingsInput
    resultHexagram: HexagramCreateNestedOneWithoutResultForReadingsInput
    chats?: ChatSessionCreateNestedManyWithoutReadingInput
    shares?: ShareLinkCreateNestedManyWithoutReadingInput
    favorites?: FavoriteCreateNestedManyWithoutReadingInput
  }

  export type ReadingUncheckedCreateInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
    method: string
    seed?: string | null
    tossesJson: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingCreatemovingLinesInput | number[]
    baseHexagramId: number
    resultHexagramId: number
    question?: string | null
    notes?: string | null
    chats?: ChatSessionUncheckedCreateNestedManyWithoutReadingInput
    shares?: ShareLinkUncheckedCreateNestedManyWithoutReadingInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutReadingInput
  }

  export type ReadingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    seed?: NullableStringFieldUpdateOperationsInput | string | null
    tossesJson?: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingUpdatemovingLinesInput | number[]
    question?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutReadingsNestedInput
    baseHexagram?: HexagramUpdateOneRequiredWithoutBaseForReadingsNestedInput
    resultHexagram?: HexagramUpdateOneRequiredWithoutResultForReadingsNestedInput
    chats?: ChatSessionUpdateManyWithoutReadingNestedInput
    shares?: ShareLinkUpdateManyWithoutReadingNestedInput
    favorites?: FavoriteUpdateManyWithoutReadingNestedInput
  }

  export type ReadingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    seed?: NullableStringFieldUpdateOperationsInput | string | null
    tossesJson?: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingUpdatemovingLinesInput | number[]
    baseHexagramId?: IntFieldUpdateOperationsInput | number
    resultHexagramId?: IntFieldUpdateOperationsInput | number
    question?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    chats?: ChatSessionUncheckedUpdateManyWithoutReadingNestedInput
    shares?: ShareLinkUncheckedUpdateManyWithoutReadingNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutReadingNestedInput
  }

  export type ReadingCreateManyInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
    method: string
    seed?: string | null
    tossesJson: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingCreatemovingLinesInput | number[]
    baseHexagramId: number
    resultHexagramId: number
    question?: string | null
    notes?: string | null
  }

  export type ReadingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    seed?: NullableStringFieldUpdateOperationsInput | string | null
    tossesJson?: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingUpdatemovingLinesInput | number[]
    question?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReadingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    seed?: NullableStringFieldUpdateOperationsInput | string | null
    tossesJson?: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingUpdatemovingLinesInput | number[]
    baseHexagramId?: IntFieldUpdateOperationsInput | number
    resultHexagramId?: IntFieldUpdateOperationsInput | number
    question?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatSessionCreateInput = {
    id?: string
    createdAt?: Date | string
    User?: UserCreateNestedOneWithoutChatsInput
    Reading: ReadingCreateNestedOneWithoutChatsInput
    messages?: ChatMessageCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionUncheckedCreateInput = {
    id?: string
    userId?: string | null
    readingId: string
    createdAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutChatsNestedInput
    Reading?: ReadingUpdateOneRequiredWithoutChatsNestedInput
    messages?: ChatMessageUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    readingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionCreateManyInput = {
    id?: string
    userId?: string | null
    readingId: string
    createdAt?: Date | string
  }

  export type ChatSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    readingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
    Session: ChatSessionCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    sessionId: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Session?: ChatSessionUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    sessionId: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareLinkCreateInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    Reading: ReadingCreateNestedOneWithoutSharesInput
  }

  export type ShareLinkUncheckedCreateInput = {
    id?: string
    readingId: string
    token: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type ShareLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Reading?: ReadingUpdateOneRequiredWithoutSharesNestedInput
  }

  export type ShareLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    readingId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShareLinkCreateManyInput = {
    id?: string
    readingId: string
    token: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type ShareLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShareLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    readingId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FavoriteCreateInput = {
    id?: string
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutFavoritesInput
    Reading: ReadingCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateInput = {
    id?: string
    userId: string
    readingId: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutFavoritesNestedInput
    Reading?: ReadingUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    readingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateManyInput = {
    id?: string
    userId: string
    readingId: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    readingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalEntryCreateInput = {
    id?: string
    createdAt?: Date | string
    title?: string | null
    body: string
    User: UserCreateNestedOneWithoutJournalInput
  }

  export type JournalEntryUncheckedCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    title?: string | null
    body: string
  }

  export type JournalEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutJournalNestedInput
  }

  export type JournalEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
  }

  export type JournalEntryCreateManyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    title?: string | null
    body: string
  }

  export type JournalEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
  }

  export type JournalEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type HexagramListRelationFilter = {
    every?: HexagramWhereInput
    some?: HexagramWhereInput
    none?: HexagramWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HexagramOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrigramCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    meaning?: SortOrder
  }

  export type TrigramAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TrigramMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    meaning?: SortOrder
  }

  export type TrigramMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    meaning?: SortOrder
  }

  export type TrigramSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type TrigramScalarRelationFilter = {
    is?: TrigramWhereInput
    isNot?: TrigramWhereInput
  }

  export type LineListRelationFilter = {
    every?: LineWhereInput
    some?: LineWhereInput
    none?: LineWhereInput
  }

  export type ReadingListRelationFilter = {
    every?: ReadingWhereInput
    some?: ReadingWhereInput
    none?: ReadingWhereInput
  }

  export type LineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReadingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HexagramCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    judgment?: SortOrder
    imageText?: SortOrder
    comment?: SortOrder
    footnote?: SortOrder
    tags?: SortOrder
    upperTrigramId?: SortOrder
    lowerTrigramId?: SortOrder
  }

  export type HexagramAvgOrderByAggregateInput = {
    id?: SortOrder
    upperTrigramId?: SortOrder
    lowerTrigramId?: SortOrder
  }

  export type HexagramMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    judgment?: SortOrder
    imageText?: SortOrder
    comment?: SortOrder
    footnote?: SortOrder
    upperTrigramId?: SortOrder
    lowerTrigramId?: SortOrder
  }

  export type HexagramMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    judgment?: SortOrder
    imageText?: SortOrder
    comment?: SortOrder
    footnote?: SortOrder
    upperTrigramId?: SortOrder
    lowerTrigramId?: SortOrder
  }

  export type HexagramSumOrderByAggregateInput = {
    id?: SortOrder
    upperTrigramId?: SortOrder
    lowerTrigramId?: SortOrder
  }

  export type HexagramScalarRelationFilter = {
    is?: HexagramWhereInput
    isNot?: HexagramWhereInput
  }

  export type LineHexagramIdNumberCompoundUniqueInput = {
    hexagramId: number
    number: number
  }

  export type LineCountOrderByAggregateInput = {
    id?: SortOrder
    hexagramId?: SortOrder
    number?: SortOrder
    text?: SortOrder
  }

  export type LineAvgOrderByAggregateInput = {
    id?: SortOrder
    hexagramId?: SortOrder
    number?: SortOrder
  }

  export type LineMaxOrderByAggregateInput = {
    id?: SortOrder
    hexagramId?: SortOrder
    number?: SortOrder
    text?: SortOrder
  }

  export type LineMinOrderByAggregateInput = {
    id?: SortOrder
    hexagramId?: SortOrder
    number?: SortOrder
    text?: SortOrder
  }

  export type LineSumOrderByAggregateInput = {
    id?: SortOrder
    hexagramId?: SortOrder
    number?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type ContentSourceCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    payload?: SortOrder
    version?: SortOrder
    importedAt?: SortOrder
  }

  export type ContentSourceMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    version?: SortOrder
    importedAt?: SortOrder
  }

  export type ContentSourceMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    version?: SortOrder
    importedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type ChatSessionListRelationFilter = {
    every?: ChatSessionWhereInput
    some?: ChatSessionWhereInput
    none?: ChatSessionWhereInput
  }

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput
    some?: FavoriteWhereInput
    none?: FavoriteWhereInput
  }

  export type JournalEntryListRelationFilter = {
    every?: JournalEntryWhereInput
    some?: JournalEntryWhereInput
    none?: JournalEntryWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type ChatSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JournalEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ShareLinkListRelationFilter = {
    every?: ShareLinkWhereInput
    some?: ShareLinkWhereInput
    none?: ShareLinkWhereInput
  }

  export type ShareLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReadingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    method?: SortOrder
    seed?: SortOrder
    tossesJson?: SortOrder
    movingLines?: SortOrder
    baseHexagramId?: SortOrder
    resultHexagramId?: SortOrder
    question?: SortOrder
    notes?: SortOrder
  }

  export type ReadingAvgOrderByAggregateInput = {
    movingLines?: SortOrder
    baseHexagramId?: SortOrder
    resultHexagramId?: SortOrder
  }

  export type ReadingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    method?: SortOrder
    seed?: SortOrder
    baseHexagramId?: SortOrder
    resultHexagramId?: SortOrder
    question?: SortOrder
    notes?: SortOrder
  }

  export type ReadingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    method?: SortOrder
    seed?: SortOrder
    baseHexagramId?: SortOrder
    resultHexagramId?: SortOrder
    question?: SortOrder
    notes?: SortOrder
  }

  export type ReadingSumOrderByAggregateInput = {
    movingLines?: SortOrder
    baseHexagramId?: SortOrder
    resultHexagramId?: SortOrder
  }

  export type ReadingScalarRelationFilter = {
    is?: ReadingWhereInput
    isNot?: ReadingWhereInput
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    readingId?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    readingId?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    readingId?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatSessionScalarRelationFilter = {
    is?: ChatSessionWhereInput
    isNot?: ChatSessionWhereInput
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ShareLinkCountOrderByAggregateInput = {
    id?: SortOrder
    readingId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type ShareLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    readingId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type ShareLinkMinOrderByAggregateInput = {
    id?: SortOrder
    readingId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FavoriteUserIdReadingIdCompoundUniqueInput = {
    userId: string
    readingId: string
  }

  export type FavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    readingId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    readingId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    readingId?: SortOrder
    createdAt?: SortOrder
  }

  export type JournalEntryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    body?: SortOrder
  }

  export type JournalEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    body?: SortOrder
  }

  export type JournalEntryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    body?: SortOrder
  }

  export type HexagramCreateNestedManyWithoutUpperTrigramInput = {
    create?: XOR<HexagramCreateWithoutUpperTrigramInput, HexagramUncheckedCreateWithoutUpperTrigramInput> | HexagramCreateWithoutUpperTrigramInput[] | HexagramUncheckedCreateWithoutUpperTrigramInput[]
    connectOrCreate?: HexagramCreateOrConnectWithoutUpperTrigramInput | HexagramCreateOrConnectWithoutUpperTrigramInput[]
    createMany?: HexagramCreateManyUpperTrigramInputEnvelope
    connect?: HexagramWhereUniqueInput | HexagramWhereUniqueInput[]
  }

  export type HexagramCreateNestedManyWithoutLowerTrigramInput = {
    create?: XOR<HexagramCreateWithoutLowerTrigramInput, HexagramUncheckedCreateWithoutLowerTrigramInput> | HexagramCreateWithoutLowerTrigramInput[] | HexagramUncheckedCreateWithoutLowerTrigramInput[]
    connectOrCreate?: HexagramCreateOrConnectWithoutLowerTrigramInput | HexagramCreateOrConnectWithoutLowerTrigramInput[]
    createMany?: HexagramCreateManyLowerTrigramInputEnvelope
    connect?: HexagramWhereUniqueInput | HexagramWhereUniqueInput[]
  }

  export type HexagramUncheckedCreateNestedManyWithoutUpperTrigramInput = {
    create?: XOR<HexagramCreateWithoutUpperTrigramInput, HexagramUncheckedCreateWithoutUpperTrigramInput> | HexagramCreateWithoutUpperTrigramInput[] | HexagramUncheckedCreateWithoutUpperTrigramInput[]
    connectOrCreate?: HexagramCreateOrConnectWithoutUpperTrigramInput | HexagramCreateOrConnectWithoutUpperTrigramInput[]
    createMany?: HexagramCreateManyUpperTrigramInputEnvelope
    connect?: HexagramWhereUniqueInput | HexagramWhereUniqueInput[]
  }

  export type HexagramUncheckedCreateNestedManyWithoutLowerTrigramInput = {
    create?: XOR<HexagramCreateWithoutLowerTrigramInput, HexagramUncheckedCreateWithoutLowerTrigramInput> | HexagramCreateWithoutLowerTrigramInput[] | HexagramUncheckedCreateWithoutLowerTrigramInput[]
    connectOrCreate?: HexagramCreateOrConnectWithoutLowerTrigramInput | HexagramCreateOrConnectWithoutLowerTrigramInput[]
    createMany?: HexagramCreateManyLowerTrigramInputEnvelope
    connect?: HexagramWhereUniqueInput | HexagramWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type HexagramUpdateManyWithoutUpperTrigramNestedInput = {
    create?: XOR<HexagramCreateWithoutUpperTrigramInput, HexagramUncheckedCreateWithoutUpperTrigramInput> | HexagramCreateWithoutUpperTrigramInput[] | HexagramUncheckedCreateWithoutUpperTrigramInput[]
    connectOrCreate?: HexagramCreateOrConnectWithoutUpperTrigramInput | HexagramCreateOrConnectWithoutUpperTrigramInput[]
    upsert?: HexagramUpsertWithWhereUniqueWithoutUpperTrigramInput | HexagramUpsertWithWhereUniqueWithoutUpperTrigramInput[]
    createMany?: HexagramCreateManyUpperTrigramInputEnvelope
    set?: HexagramWhereUniqueInput | HexagramWhereUniqueInput[]
    disconnect?: HexagramWhereUniqueInput | HexagramWhereUniqueInput[]
    delete?: HexagramWhereUniqueInput | HexagramWhereUniqueInput[]
    connect?: HexagramWhereUniqueInput | HexagramWhereUniqueInput[]
    update?: HexagramUpdateWithWhereUniqueWithoutUpperTrigramInput | HexagramUpdateWithWhereUniqueWithoutUpperTrigramInput[]
    updateMany?: HexagramUpdateManyWithWhereWithoutUpperTrigramInput | HexagramUpdateManyWithWhereWithoutUpperTrigramInput[]
    deleteMany?: HexagramScalarWhereInput | HexagramScalarWhereInput[]
  }

  export type HexagramUpdateManyWithoutLowerTrigramNestedInput = {
    create?: XOR<HexagramCreateWithoutLowerTrigramInput, HexagramUncheckedCreateWithoutLowerTrigramInput> | HexagramCreateWithoutLowerTrigramInput[] | HexagramUncheckedCreateWithoutLowerTrigramInput[]
    connectOrCreate?: HexagramCreateOrConnectWithoutLowerTrigramInput | HexagramCreateOrConnectWithoutLowerTrigramInput[]
    upsert?: HexagramUpsertWithWhereUniqueWithoutLowerTrigramInput | HexagramUpsertWithWhereUniqueWithoutLowerTrigramInput[]
    createMany?: HexagramCreateManyLowerTrigramInputEnvelope
    set?: HexagramWhereUniqueInput | HexagramWhereUniqueInput[]
    disconnect?: HexagramWhereUniqueInput | HexagramWhereUniqueInput[]
    delete?: HexagramWhereUniqueInput | HexagramWhereUniqueInput[]
    connect?: HexagramWhereUniqueInput | HexagramWhereUniqueInput[]
    update?: HexagramUpdateWithWhereUniqueWithoutLowerTrigramInput | HexagramUpdateWithWhereUniqueWithoutLowerTrigramInput[]
    updateMany?: HexagramUpdateManyWithWhereWithoutLowerTrigramInput | HexagramUpdateManyWithWhereWithoutLowerTrigramInput[]
    deleteMany?: HexagramScalarWhereInput | HexagramScalarWhereInput[]
  }

  export type HexagramUncheckedUpdateManyWithoutUpperTrigramNestedInput = {
    create?: XOR<HexagramCreateWithoutUpperTrigramInput, HexagramUncheckedCreateWithoutUpperTrigramInput> | HexagramCreateWithoutUpperTrigramInput[] | HexagramUncheckedCreateWithoutUpperTrigramInput[]
    connectOrCreate?: HexagramCreateOrConnectWithoutUpperTrigramInput | HexagramCreateOrConnectWithoutUpperTrigramInput[]
    upsert?: HexagramUpsertWithWhereUniqueWithoutUpperTrigramInput | HexagramUpsertWithWhereUniqueWithoutUpperTrigramInput[]
    createMany?: HexagramCreateManyUpperTrigramInputEnvelope
    set?: HexagramWhereUniqueInput | HexagramWhereUniqueInput[]
    disconnect?: HexagramWhereUniqueInput | HexagramWhereUniqueInput[]
    delete?: HexagramWhereUniqueInput | HexagramWhereUniqueInput[]
    connect?: HexagramWhereUniqueInput | HexagramWhereUniqueInput[]
    update?: HexagramUpdateWithWhereUniqueWithoutUpperTrigramInput | HexagramUpdateWithWhereUniqueWithoutUpperTrigramInput[]
    updateMany?: HexagramUpdateManyWithWhereWithoutUpperTrigramInput | HexagramUpdateManyWithWhereWithoutUpperTrigramInput[]
    deleteMany?: HexagramScalarWhereInput | HexagramScalarWhereInput[]
  }

  export type HexagramUncheckedUpdateManyWithoutLowerTrigramNestedInput = {
    create?: XOR<HexagramCreateWithoutLowerTrigramInput, HexagramUncheckedCreateWithoutLowerTrigramInput> | HexagramCreateWithoutLowerTrigramInput[] | HexagramUncheckedCreateWithoutLowerTrigramInput[]
    connectOrCreate?: HexagramCreateOrConnectWithoutLowerTrigramInput | HexagramCreateOrConnectWithoutLowerTrigramInput[]
    upsert?: HexagramUpsertWithWhereUniqueWithoutLowerTrigramInput | HexagramUpsertWithWhereUniqueWithoutLowerTrigramInput[]
    createMany?: HexagramCreateManyLowerTrigramInputEnvelope
    set?: HexagramWhereUniqueInput | HexagramWhereUniqueInput[]
    disconnect?: HexagramWhereUniqueInput | HexagramWhereUniqueInput[]
    delete?: HexagramWhereUniqueInput | HexagramWhereUniqueInput[]
    connect?: HexagramWhereUniqueInput | HexagramWhereUniqueInput[]
    update?: HexagramUpdateWithWhereUniqueWithoutLowerTrigramInput | HexagramUpdateWithWhereUniqueWithoutLowerTrigramInput[]
    updateMany?: HexagramUpdateManyWithWhereWithoutLowerTrigramInput | HexagramUpdateManyWithWhereWithoutLowerTrigramInput[]
    deleteMany?: HexagramScalarWhereInput | HexagramScalarWhereInput[]
  }

  export type HexagramCreatetagsInput = {
    set: string[]
  }

  export type TrigramCreateNestedOneWithoutUpperOfInput = {
    create?: XOR<TrigramCreateWithoutUpperOfInput, TrigramUncheckedCreateWithoutUpperOfInput>
    connectOrCreate?: TrigramCreateOrConnectWithoutUpperOfInput
    connect?: TrigramWhereUniqueInput
  }

  export type TrigramCreateNestedOneWithoutLowerOfInput = {
    create?: XOR<TrigramCreateWithoutLowerOfInput, TrigramUncheckedCreateWithoutLowerOfInput>
    connectOrCreate?: TrigramCreateOrConnectWithoutLowerOfInput
    connect?: TrigramWhereUniqueInput
  }

  export type LineCreateNestedManyWithoutHexagramInput = {
    create?: XOR<LineCreateWithoutHexagramInput, LineUncheckedCreateWithoutHexagramInput> | LineCreateWithoutHexagramInput[] | LineUncheckedCreateWithoutHexagramInput[]
    connectOrCreate?: LineCreateOrConnectWithoutHexagramInput | LineCreateOrConnectWithoutHexagramInput[]
    createMany?: LineCreateManyHexagramInputEnvelope
    connect?: LineWhereUniqueInput | LineWhereUniqueInput[]
  }

  export type ReadingCreateNestedManyWithoutBaseHexagramInput = {
    create?: XOR<ReadingCreateWithoutBaseHexagramInput, ReadingUncheckedCreateWithoutBaseHexagramInput> | ReadingCreateWithoutBaseHexagramInput[] | ReadingUncheckedCreateWithoutBaseHexagramInput[]
    connectOrCreate?: ReadingCreateOrConnectWithoutBaseHexagramInput | ReadingCreateOrConnectWithoutBaseHexagramInput[]
    createMany?: ReadingCreateManyBaseHexagramInputEnvelope
    connect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
  }

  export type ReadingCreateNestedManyWithoutResultHexagramInput = {
    create?: XOR<ReadingCreateWithoutResultHexagramInput, ReadingUncheckedCreateWithoutResultHexagramInput> | ReadingCreateWithoutResultHexagramInput[] | ReadingUncheckedCreateWithoutResultHexagramInput[]
    connectOrCreate?: ReadingCreateOrConnectWithoutResultHexagramInput | ReadingCreateOrConnectWithoutResultHexagramInput[]
    createMany?: ReadingCreateManyResultHexagramInputEnvelope
    connect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
  }

  export type LineUncheckedCreateNestedManyWithoutHexagramInput = {
    create?: XOR<LineCreateWithoutHexagramInput, LineUncheckedCreateWithoutHexagramInput> | LineCreateWithoutHexagramInput[] | LineUncheckedCreateWithoutHexagramInput[]
    connectOrCreate?: LineCreateOrConnectWithoutHexagramInput | LineCreateOrConnectWithoutHexagramInput[]
    createMany?: LineCreateManyHexagramInputEnvelope
    connect?: LineWhereUniqueInput | LineWhereUniqueInput[]
  }

  export type ReadingUncheckedCreateNestedManyWithoutBaseHexagramInput = {
    create?: XOR<ReadingCreateWithoutBaseHexagramInput, ReadingUncheckedCreateWithoutBaseHexagramInput> | ReadingCreateWithoutBaseHexagramInput[] | ReadingUncheckedCreateWithoutBaseHexagramInput[]
    connectOrCreate?: ReadingCreateOrConnectWithoutBaseHexagramInput | ReadingCreateOrConnectWithoutBaseHexagramInput[]
    createMany?: ReadingCreateManyBaseHexagramInputEnvelope
    connect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
  }

  export type ReadingUncheckedCreateNestedManyWithoutResultHexagramInput = {
    create?: XOR<ReadingCreateWithoutResultHexagramInput, ReadingUncheckedCreateWithoutResultHexagramInput> | ReadingCreateWithoutResultHexagramInput[] | ReadingUncheckedCreateWithoutResultHexagramInput[]
    connectOrCreate?: ReadingCreateOrConnectWithoutResultHexagramInput | ReadingCreateOrConnectWithoutResultHexagramInput[]
    createMany?: ReadingCreateManyResultHexagramInputEnvelope
    connect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
  }

  export type HexagramUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TrigramUpdateOneRequiredWithoutUpperOfNestedInput = {
    create?: XOR<TrigramCreateWithoutUpperOfInput, TrigramUncheckedCreateWithoutUpperOfInput>
    connectOrCreate?: TrigramCreateOrConnectWithoutUpperOfInput
    upsert?: TrigramUpsertWithoutUpperOfInput
    connect?: TrigramWhereUniqueInput
    update?: XOR<XOR<TrigramUpdateToOneWithWhereWithoutUpperOfInput, TrigramUpdateWithoutUpperOfInput>, TrigramUncheckedUpdateWithoutUpperOfInput>
  }

  export type TrigramUpdateOneRequiredWithoutLowerOfNestedInput = {
    create?: XOR<TrigramCreateWithoutLowerOfInput, TrigramUncheckedCreateWithoutLowerOfInput>
    connectOrCreate?: TrigramCreateOrConnectWithoutLowerOfInput
    upsert?: TrigramUpsertWithoutLowerOfInput
    connect?: TrigramWhereUniqueInput
    update?: XOR<XOR<TrigramUpdateToOneWithWhereWithoutLowerOfInput, TrigramUpdateWithoutLowerOfInput>, TrigramUncheckedUpdateWithoutLowerOfInput>
  }

  export type LineUpdateManyWithoutHexagramNestedInput = {
    create?: XOR<LineCreateWithoutHexagramInput, LineUncheckedCreateWithoutHexagramInput> | LineCreateWithoutHexagramInput[] | LineUncheckedCreateWithoutHexagramInput[]
    connectOrCreate?: LineCreateOrConnectWithoutHexagramInput | LineCreateOrConnectWithoutHexagramInput[]
    upsert?: LineUpsertWithWhereUniqueWithoutHexagramInput | LineUpsertWithWhereUniqueWithoutHexagramInput[]
    createMany?: LineCreateManyHexagramInputEnvelope
    set?: LineWhereUniqueInput | LineWhereUniqueInput[]
    disconnect?: LineWhereUniqueInput | LineWhereUniqueInput[]
    delete?: LineWhereUniqueInput | LineWhereUniqueInput[]
    connect?: LineWhereUniqueInput | LineWhereUniqueInput[]
    update?: LineUpdateWithWhereUniqueWithoutHexagramInput | LineUpdateWithWhereUniqueWithoutHexagramInput[]
    updateMany?: LineUpdateManyWithWhereWithoutHexagramInput | LineUpdateManyWithWhereWithoutHexagramInput[]
    deleteMany?: LineScalarWhereInput | LineScalarWhereInput[]
  }

  export type ReadingUpdateManyWithoutBaseHexagramNestedInput = {
    create?: XOR<ReadingCreateWithoutBaseHexagramInput, ReadingUncheckedCreateWithoutBaseHexagramInput> | ReadingCreateWithoutBaseHexagramInput[] | ReadingUncheckedCreateWithoutBaseHexagramInput[]
    connectOrCreate?: ReadingCreateOrConnectWithoutBaseHexagramInput | ReadingCreateOrConnectWithoutBaseHexagramInput[]
    upsert?: ReadingUpsertWithWhereUniqueWithoutBaseHexagramInput | ReadingUpsertWithWhereUniqueWithoutBaseHexagramInput[]
    createMany?: ReadingCreateManyBaseHexagramInputEnvelope
    set?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    disconnect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    delete?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    connect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    update?: ReadingUpdateWithWhereUniqueWithoutBaseHexagramInput | ReadingUpdateWithWhereUniqueWithoutBaseHexagramInput[]
    updateMany?: ReadingUpdateManyWithWhereWithoutBaseHexagramInput | ReadingUpdateManyWithWhereWithoutBaseHexagramInput[]
    deleteMany?: ReadingScalarWhereInput | ReadingScalarWhereInput[]
  }

  export type ReadingUpdateManyWithoutResultHexagramNestedInput = {
    create?: XOR<ReadingCreateWithoutResultHexagramInput, ReadingUncheckedCreateWithoutResultHexagramInput> | ReadingCreateWithoutResultHexagramInput[] | ReadingUncheckedCreateWithoutResultHexagramInput[]
    connectOrCreate?: ReadingCreateOrConnectWithoutResultHexagramInput | ReadingCreateOrConnectWithoutResultHexagramInput[]
    upsert?: ReadingUpsertWithWhereUniqueWithoutResultHexagramInput | ReadingUpsertWithWhereUniqueWithoutResultHexagramInput[]
    createMany?: ReadingCreateManyResultHexagramInputEnvelope
    set?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    disconnect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    delete?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    connect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    update?: ReadingUpdateWithWhereUniqueWithoutResultHexagramInput | ReadingUpdateWithWhereUniqueWithoutResultHexagramInput[]
    updateMany?: ReadingUpdateManyWithWhereWithoutResultHexagramInput | ReadingUpdateManyWithWhereWithoutResultHexagramInput[]
    deleteMany?: ReadingScalarWhereInput | ReadingScalarWhereInput[]
  }

  export type LineUncheckedUpdateManyWithoutHexagramNestedInput = {
    create?: XOR<LineCreateWithoutHexagramInput, LineUncheckedCreateWithoutHexagramInput> | LineCreateWithoutHexagramInput[] | LineUncheckedCreateWithoutHexagramInput[]
    connectOrCreate?: LineCreateOrConnectWithoutHexagramInput | LineCreateOrConnectWithoutHexagramInput[]
    upsert?: LineUpsertWithWhereUniqueWithoutHexagramInput | LineUpsertWithWhereUniqueWithoutHexagramInput[]
    createMany?: LineCreateManyHexagramInputEnvelope
    set?: LineWhereUniqueInput | LineWhereUniqueInput[]
    disconnect?: LineWhereUniqueInput | LineWhereUniqueInput[]
    delete?: LineWhereUniqueInput | LineWhereUniqueInput[]
    connect?: LineWhereUniqueInput | LineWhereUniqueInput[]
    update?: LineUpdateWithWhereUniqueWithoutHexagramInput | LineUpdateWithWhereUniqueWithoutHexagramInput[]
    updateMany?: LineUpdateManyWithWhereWithoutHexagramInput | LineUpdateManyWithWhereWithoutHexagramInput[]
    deleteMany?: LineScalarWhereInput | LineScalarWhereInput[]
  }

  export type ReadingUncheckedUpdateManyWithoutBaseHexagramNestedInput = {
    create?: XOR<ReadingCreateWithoutBaseHexagramInput, ReadingUncheckedCreateWithoutBaseHexagramInput> | ReadingCreateWithoutBaseHexagramInput[] | ReadingUncheckedCreateWithoutBaseHexagramInput[]
    connectOrCreate?: ReadingCreateOrConnectWithoutBaseHexagramInput | ReadingCreateOrConnectWithoutBaseHexagramInput[]
    upsert?: ReadingUpsertWithWhereUniqueWithoutBaseHexagramInput | ReadingUpsertWithWhereUniqueWithoutBaseHexagramInput[]
    createMany?: ReadingCreateManyBaseHexagramInputEnvelope
    set?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    disconnect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    delete?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    connect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    update?: ReadingUpdateWithWhereUniqueWithoutBaseHexagramInput | ReadingUpdateWithWhereUniqueWithoutBaseHexagramInput[]
    updateMany?: ReadingUpdateManyWithWhereWithoutBaseHexagramInput | ReadingUpdateManyWithWhereWithoutBaseHexagramInput[]
    deleteMany?: ReadingScalarWhereInput | ReadingScalarWhereInput[]
  }

  export type ReadingUncheckedUpdateManyWithoutResultHexagramNestedInput = {
    create?: XOR<ReadingCreateWithoutResultHexagramInput, ReadingUncheckedCreateWithoutResultHexagramInput> | ReadingCreateWithoutResultHexagramInput[] | ReadingUncheckedCreateWithoutResultHexagramInput[]
    connectOrCreate?: ReadingCreateOrConnectWithoutResultHexagramInput | ReadingCreateOrConnectWithoutResultHexagramInput[]
    upsert?: ReadingUpsertWithWhereUniqueWithoutResultHexagramInput | ReadingUpsertWithWhereUniqueWithoutResultHexagramInput[]
    createMany?: ReadingCreateManyResultHexagramInputEnvelope
    set?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    disconnect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    delete?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    connect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    update?: ReadingUpdateWithWhereUniqueWithoutResultHexagramInput | ReadingUpdateWithWhereUniqueWithoutResultHexagramInput[]
    updateMany?: ReadingUpdateManyWithWhereWithoutResultHexagramInput | ReadingUpdateManyWithWhereWithoutResultHexagramInput[]
    deleteMany?: ReadingScalarWhereInput | ReadingScalarWhereInput[]
  }

  export type HexagramCreateNestedOneWithoutLinesInput = {
    create?: XOR<HexagramCreateWithoutLinesInput, HexagramUncheckedCreateWithoutLinesInput>
    connectOrCreate?: HexagramCreateOrConnectWithoutLinesInput
    connect?: HexagramWhereUniqueInput
  }

  export type HexagramUpdateOneRequiredWithoutLinesNestedInput = {
    create?: XOR<HexagramCreateWithoutLinesInput, HexagramUncheckedCreateWithoutLinesInput>
    connectOrCreate?: HexagramCreateOrConnectWithoutLinesInput
    upsert?: HexagramUpsertWithoutLinesInput
    connect?: HexagramWhereUniqueInput
    update?: XOR<XOR<HexagramUpdateToOneWithWhereWithoutLinesInput, HexagramUpdateWithoutLinesInput>, HexagramUncheckedUpdateWithoutLinesInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReadingCreateNestedManyWithoutUserInput = {
    create?: XOR<ReadingCreateWithoutUserInput, ReadingUncheckedCreateWithoutUserInput> | ReadingCreateWithoutUserInput[] | ReadingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReadingCreateOrConnectWithoutUserInput | ReadingCreateOrConnectWithoutUserInput[]
    createMany?: ReadingCreateManyUserInputEnvelope
    connect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
  }

  export type ChatSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput> | ChatSessionCreateWithoutUserInput[] | ChatSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutUserInput | ChatSessionCreateOrConnectWithoutUserInput[]
    createMany?: ChatSessionCreateManyUserInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type JournalEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<JournalEntryCreateWithoutUserInput, JournalEntryUncheckedCreateWithoutUserInput> | JournalEntryCreateWithoutUserInput[] | JournalEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JournalEntryCreateOrConnectWithoutUserInput | JournalEntryCreateOrConnectWithoutUserInput[]
    createMany?: JournalEntryCreateManyUserInputEnvelope
    connect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ReadingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReadingCreateWithoutUserInput, ReadingUncheckedCreateWithoutUserInput> | ReadingCreateWithoutUserInput[] | ReadingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReadingCreateOrConnectWithoutUserInput | ReadingCreateOrConnectWithoutUserInput[]
    createMany?: ReadingCreateManyUserInputEnvelope
    connect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
  }

  export type ChatSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput> | ChatSessionCreateWithoutUserInput[] | ChatSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutUserInput | ChatSessionCreateOrConnectWithoutUserInput[]
    createMany?: ChatSessionCreateManyUserInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type JournalEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<JournalEntryCreateWithoutUserInput, JournalEntryUncheckedCreateWithoutUserInput> | JournalEntryCreateWithoutUserInput[] | JournalEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JournalEntryCreateOrConnectWithoutUserInput | JournalEntryCreateOrConnectWithoutUserInput[]
    createMany?: JournalEntryCreateManyUserInputEnvelope
    connect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ReadingUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReadingCreateWithoutUserInput, ReadingUncheckedCreateWithoutUserInput> | ReadingCreateWithoutUserInput[] | ReadingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReadingCreateOrConnectWithoutUserInput | ReadingCreateOrConnectWithoutUserInput[]
    upsert?: ReadingUpsertWithWhereUniqueWithoutUserInput | ReadingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReadingCreateManyUserInputEnvelope
    set?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    disconnect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    delete?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    connect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    update?: ReadingUpdateWithWhereUniqueWithoutUserInput | ReadingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReadingUpdateManyWithWhereWithoutUserInput | ReadingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReadingScalarWhereInput | ReadingScalarWhereInput[]
  }

  export type ChatSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput> | ChatSessionCreateWithoutUserInput[] | ChatSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutUserInput | ChatSessionCreateOrConnectWithoutUserInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutUserInput | ChatSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatSessionCreateManyUserInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutUserInput | ChatSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutUserInput | ChatSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type JournalEntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<JournalEntryCreateWithoutUserInput, JournalEntryUncheckedCreateWithoutUserInput> | JournalEntryCreateWithoutUserInput[] | JournalEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JournalEntryCreateOrConnectWithoutUserInput | JournalEntryCreateOrConnectWithoutUserInput[]
    upsert?: JournalEntryUpsertWithWhereUniqueWithoutUserInput | JournalEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JournalEntryCreateManyUserInputEnvelope
    set?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    disconnect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    delete?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    connect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    update?: JournalEntryUpdateWithWhereUniqueWithoutUserInput | JournalEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JournalEntryUpdateManyWithWhereWithoutUserInput | JournalEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JournalEntryScalarWhereInput | JournalEntryScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ReadingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReadingCreateWithoutUserInput, ReadingUncheckedCreateWithoutUserInput> | ReadingCreateWithoutUserInput[] | ReadingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReadingCreateOrConnectWithoutUserInput | ReadingCreateOrConnectWithoutUserInput[]
    upsert?: ReadingUpsertWithWhereUniqueWithoutUserInput | ReadingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReadingCreateManyUserInputEnvelope
    set?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    disconnect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    delete?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    connect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    update?: ReadingUpdateWithWhereUniqueWithoutUserInput | ReadingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReadingUpdateManyWithWhereWithoutUserInput | ReadingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReadingScalarWhereInput | ReadingScalarWhereInput[]
  }

  export type ChatSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput> | ChatSessionCreateWithoutUserInput[] | ChatSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutUserInput | ChatSessionCreateOrConnectWithoutUserInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutUserInput | ChatSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatSessionCreateManyUserInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutUserInput | ChatSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutUserInput | ChatSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type JournalEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<JournalEntryCreateWithoutUserInput, JournalEntryUncheckedCreateWithoutUserInput> | JournalEntryCreateWithoutUserInput[] | JournalEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JournalEntryCreateOrConnectWithoutUserInput | JournalEntryCreateOrConnectWithoutUserInput[]
    upsert?: JournalEntryUpsertWithWhereUniqueWithoutUserInput | JournalEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JournalEntryCreateManyUserInputEnvelope
    set?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    disconnect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    delete?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    connect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    update?: JournalEntryUpdateWithWhereUniqueWithoutUserInput | JournalEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JournalEntryUpdateManyWithWhereWithoutUserInput | JournalEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JournalEntryScalarWhereInput | JournalEntryScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type ReadingCreatemovingLinesInput = {
    set: number[]
  }

  export type UserCreateNestedOneWithoutReadingsInput = {
    create?: XOR<UserCreateWithoutReadingsInput, UserUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReadingsInput
    connect?: UserWhereUniqueInput
  }

  export type HexagramCreateNestedOneWithoutBaseForReadingsInput = {
    create?: XOR<HexagramCreateWithoutBaseForReadingsInput, HexagramUncheckedCreateWithoutBaseForReadingsInput>
    connectOrCreate?: HexagramCreateOrConnectWithoutBaseForReadingsInput
    connect?: HexagramWhereUniqueInput
  }

  export type HexagramCreateNestedOneWithoutResultForReadingsInput = {
    create?: XOR<HexagramCreateWithoutResultForReadingsInput, HexagramUncheckedCreateWithoutResultForReadingsInput>
    connectOrCreate?: HexagramCreateOrConnectWithoutResultForReadingsInput
    connect?: HexagramWhereUniqueInput
  }

  export type ChatSessionCreateNestedManyWithoutReadingInput = {
    create?: XOR<ChatSessionCreateWithoutReadingInput, ChatSessionUncheckedCreateWithoutReadingInput> | ChatSessionCreateWithoutReadingInput[] | ChatSessionUncheckedCreateWithoutReadingInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutReadingInput | ChatSessionCreateOrConnectWithoutReadingInput[]
    createMany?: ChatSessionCreateManyReadingInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type ShareLinkCreateNestedManyWithoutReadingInput = {
    create?: XOR<ShareLinkCreateWithoutReadingInput, ShareLinkUncheckedCreateWithoutReadingInput> | ShareLinkCreateWithoutReadingInput[] | ShareLinkUncheckedCreateWithoutReadingInput[]
    connectOrCreate?: ShareLinkCreateOrConnectWithoutReadingInput | ShareLinkCreateOrConnectWithoutReadingInput[]
    createMany?: ShareLinkCreateManyReadingInputEnvelope
    connect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutReadingInput = {
    create?: XOR<FavoriteCreateWithoutReadingInput, FavoriteUncheckedCreateWithoutReadingInput> | FavoriteCreateWithoutReadingInput[] | FavoriteUncheckedCreateWithoutReadingInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutReadingInput | FavoriteCreateOrConnectWithoutReadingInput[]
    createMany?: FavoriteCreateManyReadingInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type ChatSessionUncheckedCreateNestedManyWithoutReadingInput = {
    create?: XOR<ChatSessionCreateWithoutReadingInput, ChatSessionUncheckedCreateWithoutReadingInput> | ChatSessionCreateWithoutReadingInput[] | ChatSessionUncheckedCreateWithoutReadingInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutReadingInput | ChatSessionCreateOrConnectWithoutReadingInput[]
    createMany?: ChatSessionCreateManyReadingInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type ShareLinkUncheckedCreateNestedManyWithoutReadingInput = {
    create?: XOR<ShareLinkCreateWithoutReadingInput, ShareLinkUncheckedCreateWithoutReadingInput> | ShareLinkCreateWithoutReadingInput[] | ShareLinkUncheckedCreateWithoutReadingInput[]
    connectOrCreate?: ShareLinkCreateOrConnectWithoutReadingInput | ShareLinkCreateOrConnectWithoutReadingInput[]
    createMany?: ShareLinkCreateManyReadingInputEnvelope
    connect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutReadingInput = {
    create?: XOR<FavoriteCreateWithoutReadingInput, FavoriteUncheckedCreateWithoutReadingInput> | FavoriteCreateWithoutReadingInput[] | FavoriteUncheckedCreateWithoutReadingInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutReadingInput | FavoriteCreateOrConnectWithoutReadingInput[]
    createMany?: FavoriteCreateManyReadingInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type ReadingUpdatemovingLinesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type UserUpdateOneWithoutReadingsNestedInput = {
    create?: XOR<UserCreateWithoutReadingsInput, UserUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReadingsInput
    upsert?: UserUpsertWithoutReadingsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReadingsInput, UserUpdateWithoutReadingsInput>, UserUncheckedUpdateWithoutReadingsInput>
  }

  export type HexagramUpdateOneRequiredWithoutBaseForReadingsNestedInput = {
    create?: XOR<HexagramCreateWithoutBaseForReadingsInput, HexagramUncheckedCreateWithoutBaseForReadingsInput>
    connectOrCreate?: HexagramCreateOrConnectWithoutBaseForReadingsInput
    upsert?: HexagramUpsertWithoutBaseForReadingsInput
    connect?: HexagramWhereUniqueInput
    update?: XOR<XOR<HexagramUpdateToOneWithWhereWithoutBaseForReadingsInput, HexagramUpdateWithoutBaseForReadingsInput>, HexagramUncheckedUpdateWithoutBaseForReadingsInput>
  }

  export type HexagramUpdateOneRequiredWithoutResultForReadingsNestedInput = {
    create?: XOR<HexagramCreateWithoutResultForReadingsInput, HexagramUncheckedCreateWithoutResultForReadingsInput>
    connectOrCreate?: HexagramCreateOrConnectWithoutResultForReadingsInput
    upsert?: HexagramUpsertWithoutResultForReadingsInput
    connect?: HexagramWhereUniqueInput
    update?: XOR<XOR<HexagramUpdateToOneWithWhereWithoutResultForReadingsInput, HexagramUpdateWithoutResultForReadingsInput>, HexagramUncheckedUpdateWithoutResultForReadingsInput>
  }

  export type ChatSessionUpdateManyWithoutReadingNestedInput = {
    create?: XOR<ChatSessionCreateWithoutReadingInput, ChatSessionUncheckedCreateWithoutReadingInput> | ChatSessionCreateWithoutReadingInput[] | ChatSessionUncheckedCreateWithoutReadingInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutReadingInput | ChatSessionCreateOrConnectWithoutReadingInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutReadingInput | ChatSessionUpsertWithWhereUniqueWithoutReadingInput[]
    createMany?: ChatSessionCreateManyReadingInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutReadingInput | ChatSessionUpdateWithWhereUniqueWithoutReadingInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutReadingInput | ChatSessionUpdateManyWithWhereWithoutReadingInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type ShareLinkUpdateManyWithoutReadingNestedInput = {
    create?: XOR<ShareLinkCreateWithoutReadingInput, ShareLinkUncheckedCreateWithoutReadingInput> | ShareLinkCreateWithoutReadingInput[] | ShareLinkUncheckedCreateWithoutReadingInput[]
    connectOrCreate?: ShareLinkCreateOrConnectWithoutReadingInput | ShareLinkCreateOrConnectWithoutReadingInput[]
    upsert?: ShareLinkUpsertWithWhereUniqueWithoutReadingInput | ShareLinkUpsertWithWhereUniqueWithoutReadingInput[]
    createMany?: ShareLinkCreateManyReadingInputEnvelope
    set?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    disconnect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    delete?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    connect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    update?: ShareLinkUpdateWithWhereUniqueWithoutReadingInput | ShareLinkUpdateWithWhereUniqueWithoutReadingInput[]
    updateMany?: ShareLinkUpdateManyWithWhereWithoutReadingInput | ShareLinkUpdateManyWithWhereWithoutReadingInput[]
    deleteMany?: ShareLinkScalarWhereInput | ShareLinkScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutReadingNestedInput = {
    create?: XOR<FavoriteCreateWithoutReadingInput, FavoriteUncheckedCreateWithoutReadingInput> | FavoriteCreateWithoutReadingInput[] | FavoriteUncheckedCreateWithoutReadingInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutReadingInput | FavoriteCreateOrConnectWithoutReadingInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutReadingInput | FavoriteUpsertWithWhereUniqueWithoutReadingInput[]
    createMany?: FavoriteCreateManyReadingInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutReadingInput | FavoriteUpdateWithWhereUniqueWithoutReadingInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutReadingInput | FavoriteUpdateManyWithWhereWithoutReadingInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type ChatSessionUncheckedUpdateManyWithoutReadingNestedInput = {
    create?: XOR<ChatSessionCreateWithoutReadingInput, ChatSessionUncheckedCreateWithoutReadingInput> | ChatSessionCreateWithoutReadingInput[] | ChatSessionUncheckedCreateWithoutReadingInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutReadingInput | ChatSessionCreateOrConnectWithoutReadingInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutReadingInput | ChatSessionUpsertWithWhereUniqueWithoutReadingInput[]
    createMany?: ChatSessionCreateManyReadingInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutReadingInput | ChatSessionUpdateWithWhereUniqueWithoutReadingInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutReadingInput | ChatSessionUpdateManyWithWhereWithoutReadingInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type ShareLinkUncheckedUpdateManyWithoutReadingNestedInput = {
    create?: XOR<ShareLinkCreateWithoutReadingInput, ShareLinkUncheckedCreateWithoutReadingInput> | ShareLinkCreateWithoutReadingInput[] | ShareLinkUncheckedCreateWithoutReadingInput[]
    connectOrCreate?: ShareLinkCreateOrConnectWithoutReadingInput | ShareLinkCreateOrConnectWithoutReadingInput[]
    upsert?: ShareLinkUpsertWithWhereUniqueWithoutReadingInput | ShareLinkUpsertWithWhereUniqueWithoutReadingInput[]
    createMany?: ShareLinkCreateManyReadingInputEnvelope
    set?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    disconnect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    delete?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    connect?: ShareLinkWhereUniqueInput | ShareLinkWhereUniqueInput[]
    update?: ShareLinkUpdateWithWhereUniqueWithoutReadingInput | ShareLinkUpdateWithWhereUniqueWithoutReadingInput[]
    updateMany?: ShareLinkUpdateManyWithWhereWithoutReadingInput | ShareLinkUpdateManyWithWhereWithoutReadingInput[]
    deleteMany?: ShareLinkScalarWhereInput | ShareLinkScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutReadingNestedInput = {
    create?: XOR<FavoriteCreateWithoutReadingInput, FavoriteUncheckedCreateWithoutReadingInput> | FavoriteCreateWithoutReadingInput[] | FavoriteUncheckedCreateWithoutReadingInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutReadingInput | FavoriteCreateOrConnectWithoutReadingInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutReadingInput | FavoriteUpsertWithWhereUniqueWithoutReadingInput[]
    createMany?: FavoriteCreateManyReadingInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutReadingInput | FavoriteUpdateWithWhereUniqueWithoutReadingInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutReadingInput | FavoriteUpdateManyWithWhereWithoutReadingInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutChatsInput = {
    create?: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatsInput
    connect?: UserWhereUniqueInput
  }

  export type ReadingCreateNestedOneWithoutChatsInput = {
    create?: XOR<ReadingCreateWithoutChatsInput, ReadingUncheckedCreateWithoutChatsInput>
    connectOrCreate?: ReadingCreateOrConnectWithoutChatsInput
    connect?: ReadingWhereUniqueInput
  }

  export type ChatMessageCreateNestedManyWithoutSessionInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutChatsNestedInput = {
    create?: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatsInput
    upsert?: UserUpsertWithoutChatsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatsInput, UserUpdateWithoutChatsInput>, UserUncheckedUpdateWithoutChatsInput>
  }

  export type ReadingUpdateOneRequiredWithoutChatsNestedInput = {
    create?: XOR<ReadingCreateWithoutChatsInput, ReadingUncheckedCreateWithoutChatsInput>
    connectOrCreate?: ReadingCreateOrConnectWithoutChatsInput
    upsert?: ReadingUpsertWithoutChatsInput
    connect?: ReadingWhereUniqueInput
    update?: XOR<XOR<ReadingUpdateToOneWithWhereWithoutChatsInput, ReadingUpdateWithoutChatsInput>, ReadingUncheckedUpdateWithoutChatsInput>
  }

  export type ChatMessageUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSessionInput | ChatMessageUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSessionInput | ChatMessageUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSessionInput | ChatMessageUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSessionInput | ChatMessageUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSessionInput | ChatMessageUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSessionInput | ChatMessageUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatSessionCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutMessagesInput
    connect?: ChatSessionWhereUniqueInput
  }

  export type ChatSessionUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutMessagesInput
    upsert?: ChatSessionUpsertWithoutMessagesInput
    connect?: ChatSessionWhereUniqueInput
    update?: XOR<XOR<ChatSessionUpdateToOneWithWhereWithoutMessagesInput, ChatSessionUpdateWithoutMessagesInput>, ChatSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type ReadingCreateNestedOneWithoutSharesInput = {
    create?: XOR<ReadingCreateWithoutSharesInput, ReadingUncheckedCreateWithoutSharesInput>
    connectOrCreate?: ReadingCreateOrConnectWithoutSharesInput
    connect?: ReadingWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ReadingUpdateOneRequiredWithoutSharesNestedInput = {
    create?: XOR<ReadingCreateWithoutSharesInput, ReadingUncheckedCreateWithoutSharesInput>
    connectOrCreate?: ReadingCreateOrConnectWithoutSharesInput
    upsert?: ReadingUpsertWithoutSharesInput
    connect?: ReadingWhereUniqueInput
    update?: XOR<XOR<ReadingUpdateToOneWithWhereWithoutSharesInput, ReadingUpdateWithoutSharesInput>, ReadingUncheckedUpdateWithoutSharesInput>
  }

  export type UserCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    connect?: UserWhereUniqueInput
  }

  export type ReadingCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<ReadingCreateWithoutFavoritesInput, ReadingUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: ReadingCreateOrConnectWithoutFavoritesInput
    connect?: ReadingWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    upsert?: UserUpsertWithoutFavoritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoritesInput, UserUpdateWithoutFavoritesInput>, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type ReadingUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<ReadingCreateWithoutFavoritesInput, ReadingUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: ReadingCreateOrConnectWithoutFavoritesInput
    upsert?: ReadingUpsertWithoutFavoritesInput
    connect?: ReadingWhereUniqueInput
    update?: XOR<XOR<ReadingUpdateToOneWithWhereWithoutFavoritesInput, ReadingUpdateWithoutFavoritesInput>, ReadingUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserCreateNestedOneWithoutJournalInput = {
    create?: XOR<UserCreateWithoutJournalInput, UserUncheckedCreateWithoutJournalInput>
    connectOrCreate?: UserCreateOrConnectWithoutJournalInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutJournalNestedInput = {
    create?: XOR<UserCreateWithoutJournalInput, UserUncheckedCreateWithoutJournalInput>
    connectOrCreate?: UserCreateOrConnectWithoutJournalInput
    upsert?: UserUpsertWithoutJournalInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJournalInput, UserUpdateWithoutJournalInput>, UserUncheckedUpdateWithoutJournalInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type HexagramCreateWithoutUpperTrigramInput = {
    id: number
    key: string
    slug: string
    name: string
    judgment: string
    imageText?: string | null
    comment?: string | null
    footnote?: string | null
    tags?: HexagramCreatetagsInput | string[]
    lowerTrigram: TrigramCreateNestedOneWithoutLowerOfInput
    lines?: LineCreateNestedManyWithoutHexagramInput
    baseForReadings?: ReadingCreateNestedManyWithoutBaseHexagramInput
    resultForReadings?: ReadingCreateNestedManyWithoutResultHexagramInput
  }

  export type HexagramUncheckedCreateWithoutUpperTrigramInput = {
    id: number
    key: string
    slug: string
    name: string
    judgment: string
    imageText?: string | null
    comment?: string | null
    footnote?: string | null
    tags?: HexagramCreatetagsInput | string[]
    lowerTrigramId: number
    lines?: LineUncheckedCreateNestedManyWithoutHexagramInput
    baseForReadings?: ReadingUncheckedCreateNestedManyWithoutBaseHexagramInput
    resultForReadings?: ReadingUncheckedCreateNestedManyWithoutResultHexagramInput
  }

  export type HexagramCreateOrConnectWithoutUpperTrigramInput = {
    where: HexagramWhereUniqueInput
    create: XOR<HexagramCreateWithoutUpperTrigramInput, HexagramUncheckedCreateWithoutUpperTrigramInput>
  }

  export type HexagramCreateManyUpperTrigramInputEnvelope = {
    data: HexagramCreateManyUpperTrigramInput | HexagramCreateManyUpperTrigramInput[]
    skipDuplicates?: boolean
  }

  export type HexagramCreateWithoutLowerTrigramInput = {
    id: number
    key: string
    slug: string
    name: string
    judgment: string
    imageText?: string | null
    comment?: string | null
    footnote?: string | null
    tags?: HexagramCreatetagsInput | string[]
    upperTrigram: TrigramCreateNestedOneWithoutUpperOfInput
    lines?: LineCreateNestedManyWithoutHexagramInput
    baseForReadings?: ReadingCreateNestedManyWithoutBaseHexagramInput
    resultForReadings?: ReadingCreateNestedManyWithoutResultHexagramInput
  }

  export type HexagramUncheckedCreateWithoutLowerTrigramInput = {
    id: number
    key: string
    slug: string
    name: string
    judgment: string
    imageText?: string | null
    comment?: string | null
    footnote?: string | null
    tags?: HexagramCreatetagsInput | string[]
    upperTrigramId: number
    lines?: LineUncheckedCreateNestedManyWithoutHexagramInput
    baseForReadings?: ReadingUncheckedCreateNestedManyWithoutBaseHexagramInput
    resultForReadings?: ReadingUncheckedCreateNestedManyWithoutResultHexagramInput
  }

  export type HexagramCreateOrConnectWithoutLowerTrigramInput = {
    where: HexagramWhereUniqueInput
    create: XOR<HexagramCreateWithoutLowerTrigramInput, HexagramUncheckedCreateWithoutLowerTrigramInput>
  }

  export type HexagramCreateManyLowerTrigramInputEnvelope = {
    data: HexagramCreateManyLowerTrigramInput | HexagramCreateManyLowerTrigramInput[]
    skipDuplicates?: boolean
  }

  export type HexagramUpsertWithWhereUniqueWithoutUpperTrigramInput = {
    where: HexagramWhereUniqueInput
    update: XOR<HexagramUpdateWithoutUpperTrigramInput, HexagramUncheckedUpdateWithoutUpperTrigramInput>
    create: XOR<HexagramCreateWithoutUpperTrigramInput, HexagramUncheckedCreateWithoutUpperTrigramInput>
  }

  export type HexagramUpdateWithWhereUniqueWithoutUpperTrigramInput = {
    where: HexagramWhereUniqueInput
    data: XOR<HexagramUpdateWithoutUpperTrigramInput, HexagramUncheckedUpdateWithoutUpperTrigramInput>
  }

  export type HexagramUpdateManyWithWhereWithoutUpperTrigramInput = {
    where: HexagramScalarWhereInput
    data: XOR<HexagramUpdateManyMutationInput, HexagramUncheckedUpdateManyWithoutUpperTrigramInput>
  }

  export type HexagramScalarWhereInput = {
    AND?: HexagramScalarWhereInput | HexagramScalarWhereInput[]
    OR?: HexagramScalarWhereInput[]
    NOT?: HexagramScalarWhereInput | HexagramScalarWhereInput[]
    id?: IntFilter<"Hexagram"> | number
    key?: StringFilter<"Hexagram"> | string
    slug?: StringFilter<"Hexagram"> | string
    name?: StringFilter<"Hexagram"> | string
    judgment?: StringFilter<"Hexagram"> | string
    imageText?: StringNullableFilter<"Hexagram"> | string | null
    comment?: StringNullableFilter<"Hexagram"> | string | null
    footnote?: StringNullableFilter<"Hexagram"> | string | null
    tags?: StringNullableListFilter<"Hexagram">
    upperTrigramId?: IntFilter<"Hexagram"> | number
    lowerTrigramId?: IntFilter<"Hexagram"> | number
  }

  export type HexagramUpsertWithWhereUniqueWithoutLowerTrigramInput = {
    where: HexagramWhereUniqueInput
    update: XOR<HexagramUpdateWithoutLowerTrigramInput, HexagramUncheckedUpdateWithoutLowerTrigramInput>
    create: XOR<HexagramCreateWithoutLowerTrigramInput, HexagramUncheckedCreateWithoutLowerTrigramInput>
  }

  export type HexagramUpdateWithWhereUniqueWithoutLowerTrigramInput = {
    where: HexagramWhereUniqueInput
    data: XOR<HexagramUpdateWithoutLowerTrigramInput, HexagramUncheckedUpdateWithoutLowerTrigramInput>
  }

  export type HexagramUpdateManyWithWhereWithoutLowerTrigramInput = {
    where: HexagramScalarWhereInput
    data: XOR<HexagramUpdateManyMutationInput, HexagramUncheckedUpdateManyWithoutLowerTrigramInput>
  }

  export type TrigramCreateWithoutUpperOfInput = {
    id: number
    key: string
    name: string
    meaning?: string | null
    lowerOf?: HexagramCreateNestedManyWithoutLowerTrigramInput
  }

  export type TrigramUncheckedCreateWithoutUpperOfInput = {
    id: number
    key: string
    name: string
    meaning?: string | null
    lowerOf?: HexagramUncheckedCreateNestedManyWithoutLowerTrigramInput
  }

  export type TrigramCreateOrConnectWithoutUpperOfInput = {
    where: TrigramWhereUniqueInput
    create: XOR<TrigramCreateWithoutUpperOfInput, TrigramUncheckedCreateWithoutUpperOfInput>
  }

  export type TrigramCreateWithoutLowerOfInput = {
    id: number
    key: string
    name: string
    meaning?: string | null
    upperOf?: HexagramCreateNestedManyWithoutUpperTrigramInput
  }

  export type TrigramUncheckedCreateWithoutLowerOfInput = {
    id: number
    key: string
    name: string
    meaning?: string | null
    upperOf?: HexagramUncheckedCreateNestedManyWithoutUpperTrigramInput
  }

  export type TrigramCreateOrConnectWithoutLowerOfInput = {
    where: TrigramWhereUniqueInput
    create: XOR<TrigramCreateWithoutLowerOfInput, TrigramUncheckedCreateWithoutLowerOfInput>
  }

  export type LineCreateWithoutHexagramInput = {
    number: number
    text: string
  }

  export type LineUncheckedCreateWithoutHexagramInput = {
    id?: number
    number: number
    text: string
  }

  export type LineCreateOrConnectWithoutHexagramInput = {
    where: LineWhereUniqueInput
    create: XOR<LineCreateWithoutHexagramInput, LineUncheckedCreateWithoutHexagramInput>
  }

  export type LineCreateManyHexagramInputEnvelope = {
    data: LineCreateManyHexagramInput | LineCreateManyHexagramInput[]
    skipDuplicates?: boolean
  }

  export type ReadingCreateWithoutBaseHexagramInput = {
    id?: string
    createdAt?: Date | string
    method: string
    seed?: string | null
    tossesJson: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingCreatemovingLinesInput | number[]
    question?: string | null
    notes?: string | null
    User?: UserCreateNestedOneWithoutReadingsInput
    resultHexagram: HexagramCreateNestedOneWithoutResultForReadingsInput
    chats?: ChatSessionCreateNestedManyWithoutReadingInput
    shares?: ShareLinkCreateNestedManyWithoutReadingInput
    favorites?: FavoriteCreateNestedManyWithoutReadingInput
  }

  export type ReadingUncheckedCreateWithoutBaseHexagramInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
    method: string
    seed?: string | null
    tossesJson: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingCreatemovingLinesInput | number[]
    resultHexagramId: number
    question?: string | null
    notes?: string | null
    chats?: ChatSessionUncheckedCreateNestedManyWithoutReadingInput
    shares?: ShareLinkUncheckedCreateNestedManyWithoutReadingInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutReadingInput
  }

  export type ReadingCreateOrConnectWithoutBaseHexagramInput = {
    where: ReadingWhereUniqueInput
    create: XOR<ReadingCreateWithoutBaseHexagramInput, ReadingUncheckedCreateWithoutBaseHexagramInput>
  }

  export type ReadingCreateManyBaseHexagramInputEnvelope = {
    data: ReadingCreateManyBaseHexagramInput | ReadingCreateManyBaseHexagramInput[]
    skipDuplicates?: boolean
  }

  export type ReadingCreateWithoutResultHexagramInput = {
    id?: string
    createdAt?: Date | string
    method: string
    seed?: string | null
    tossesJson: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingCreatemovingLinesInput | number[]
    question?: string | null
    notes?: string | null
    User?: UserCreateNestedOneWithoutReadingsInput
    baseHexagram: HexagramCreateNestedOneWithoutBaseForReadingsInput
    chats?: ChatSessionCreateNestedManyWithoutReadingInput
    shares?: ShareLinkCreateNestedManyWithoutReadingInput
    favorites?: FavoriteCreateNestedManyWithoutReadingInput
  }

  export type ReadingUncheckedCreateWithoutResultHexagramInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
    method: string
    seed?: string | null
    tossesJson: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingCreatemovingLinesInput | number[]
    baseHexagramId: number
    question?: string | null
    notes?: string | null
    chats?: ChatSessionUncheckedCreateNestedManyWithoutReadingInput
    shares?: ShareLinkUncheckedCreateNestedManyWithoutReadingInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutReadingInput
  }

  export type ReadingCreateOrConnectWithoutResultHexagramInput = {
    where: ReadingWhereUniqueInput
    create: XOR<ReadingCreateWithoutResultHexagramInput, ReadingUncheckedCreateWithoutResultHexagramInput>
  }

  export type ReadingCreateManyResultHexagramInputEnvelope = {
    data: ReadingCreateManyResultHexagramInput | ReadingCreateManyResultHexagramInput[]
    skipDuplicates?: boolean
  }

  export type TrigramUpsertWithoutUpperOfInput = {
    update: XOR<TrigramUpdateWithoutUpperOfInput, TrigramUncheckedUpdateWithoutUpperOfInput>
    create: XOR<TrigramCreateWithoutUpperOfInput, TrigramUncheckedCreateWithoutUpperOfInput>
    where?: TrigramWhereInput
  }

  export type TrigramUpdateToOneWithWhereWithoutUpperOfInput = {
    where?: TrigramWhereInput
    data: XOR<TrigramUpdateWithoutUpperOfInput, TrigramUncheckedUpdateWithoutUpperOfInput>
  }

  export type TrigramUpdateWithoutUpperOfInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    meaning?: NullableStringFieldUpdateOperationsInput | string | null
    lowerOf?: HexagramUpdateManyWithoutLowerTrigramNestedInput
  }

  export type TrigramUncheckedUpdateWithoutUpperOfInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    meaning?: NullableStringFieldUpdateOperationsInput | string | null
    lowerOf?: HexagramUncheckedUpdateManyWithoutLowerTrigramNestedInput
  }

  export type TrigramUpsertWithoutLowerOfInput = {
    update: XOR<TrigramUpdateWithoutLowerOfInput, TrigramUncheckedUpdateWithoutLowerOfInput>
    create: XOR<TrigramCreateWithoutLowerOfInput, TrigramUncheckedCreateWithoutLowerOfInput>
    where?: TrigramWhereInput
  }

  export type TrigramUpdateToOneWithWhereWithoutLowerOfInput = {
    where?: TrigramWhereInput
    data: XOR<TrigramUpdateWithoutLowerOfInput, TrigramUncheckedUpdateWithoutLowerOfInput>
  }

  export type TrigramUpdateWithoutLowerOfInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    meaning?: NullableStringFieldUpdateOperationsInput | string | null
    upperOf?: HexagramUpdateManyWithoutUpperTrigramNestedInput
  }

  export type TrigramUncheckedUpdateWithoutLowerOfInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    meaning?: NullableStringFieldUpdateOperationsInput | string | null
    upperOf?: HexagramUncheckedUpdateManyWithoutUpperTrigramNestedInput
  }

  export type LineUpsertWithWhereUniqueWithoutHexagramInput = {
    where: LineWhereUniqueInput
    update: XOR<LineUpdateWithoutHexagramInput, LineUncheckedUpdateWithoutHexagramInput>
    create: XOR<LineCreateWithoutHexagramInput, LineUncheckedCreateWithoutHexagramInput>
  }

  export type LineUpdateWithWhereUniqueWithoutHexagramInput = {
    where: LineWhereUniqueInput
    data: XOR<LineUpdateWithoutHexagramInput, LineUncheckedUpdateWithoutHexagramInput>
  }

  export type LineUpdateManyWithWhereWithoutHexagramInput = {
    where: LineScalarWhereInput
    data: XOR<LineUpdateManyMutationInput, LineUncheckedUpdateManyWithoutHexagramInput>
  }

  export type LineScalarWhereInput = {
    AND?: LineScalarWhereInput | LineScalarWhereInput[]
    OR?: LineScalarWhereInput[]
    NOT?: LineScalarWhereInput | LineScalarWhereInput[]
    id?: IntFilter<"Line"> | number
    hexagramId?: IntFilter<"Line"> | number
    number?: IntFilter<"Line"> | number
    text?: StringFilter<"Line"> | string
  }

  export type ReadingUpsertWithWhereUniqueWithoutBaseHexagramInput = {
    where: ReadingWhereUniqueInput
    update: XOR<ReadingUpdateWithoutBaseHexagramInput, ReadingUncheckedUpdateWithoutBaseHexagramInput>
    create: XOR<ReadingCreateWithoutBaseHexagramInput, ReadingUncheckedCreateWithoutBaseHexagramInput>
  }

  export type ReadingUpdateWithWhereUniqueWithoutBaseHexagramInput = {
    where: ReadingWhereUniqueInput
    data: XOR<ReadingUpdateWithoutBaseHexagramInput, ReadingUncheckedUpdateWithoutBaseHexagramInput>
  }

  export type ReadingUpdateManyWithWhereWithoutBaseHexagramInput = {
    where: ReadingScalarWhereInput
    data: XOR<ReadingUpdateManyMutationInput, ReadingUncheckedUpdateManyWithoutBaseHexagramInput>
  }

  export type ReadingScalarWhereInput = {
    AND?: ReadingScalarWhereInput | ReadingScalarWhereInput[]
    OR?: ReadingScalarWhereInput[]
    NOT?: ReadingScalarWhereInput | ReadingScalarWhereInput[]
    id?: StringFilter<"Reading"> | string
    userId?: StringNullableFilter<"Reading"> | string | null
    createdAt?: DateTimeFilter<"Reading"> | Date | string
    method?: StringFilter<"Reading"> | string
    seed?: StringNullableFilter<"Reading"> | string | null
    tossesJson?: JsonFilter<"Reading">
    movingLines?: IntNullableListFilter<"Reading">
    baseHexagramId?: IntFilter<"Reading"> | number
    resultHexagramId?: IntFilter<"Reading"> | number
    question?: StringNullableFilter<"Reading"> | string | null
    notes?: StringNullableFilter<"Reading"> | string | null
  }

  export type ReadingUpsertWithWhereUniqueWithoutResultHexagramInput = {
    where: ReadingWhereUniqueInput
    update: XOR<ReadingUpdateWithoutResultHexagramInput, ReadingUncheckedUpdateWithoutResultHexagramInput>
    create: XOR<ReadingCreateWithoutResultHexagramInput, ReadingUncheckedCreateWithoutResultHexagramInput>
  }

  export type ReadingUpdateWithWhereUniqueWithoutResultHexagramInput = {
    where: ReadingWhereUniqueInput
    data: XOR<ReadingUpdateWithoutResultHexagramInput, ReadingUncheckedUpdateWithoutResultHexagramInput>
  }

  export type ReadingUpdateManyWithWhereWithoutResultHexagramInput = {
    where: ReadingScalarWhereInput
    data: XOR<ReadingUpdateManyMutationInput, ReadingUncheckedUpdateManyWithoutResultHexagramInput>
  }

  export type HexagramCreateWithoutLinesInput = {
    id: number
    key: string
    slug: string
    name: string
    judgment: string
    imageText?: string | null
    comment?: string | null
    footnote?: string | null
    tags?: HexagramCreatetagsInput | string[]
    upperTrigram: TrigramCreateNestedOneWithoutUpperOfInput
    lowerTrigram: TrigramCreateNestedOneWithoutLowerOfInput
    baseForReadings?: ReadingCreateNestedManyWithoutBaseHexagramInput
    resultForReadings?: ReadingCreateNestedManyWithoutResultHexagramInput
  }

  export type HexagramUncheckedCreateWithoutLinesInput = {
    id: number
    key: string
    slug: string
    name: string
    judgment: string
    imageText?: string | null
    comment?: string | null
    footnote?: string | null
    tags?: HexagramCreatetagsInput | string[]
    upperTrigramId: number
    lowerTrigramId: number
    baseForReadings?: ReadingUncheckedCreateNestedManyWithoutBaseHexagramInput
    resultForReadings?: ReadingUncheckedCreateNestedManyWithoutResultHexagramInput
  }

  export type HexagramCreateOrConnectWithoutLinesInput = {
    where: HexagramWhereUniqueInput
    create: XOR<HexagramCreateWithoutLinesInput, HexagramUncheckedCreateWithoutLinesInput>
  }

  export type HexagramUpsertWithoutLinesInput = {
    update: XOR<HexagramUpdateWithoutLinesInput, HexagramUncheckedUpdateWithoutLinesInput>
    create: XOR<HexagramCreateWithoutLinesInput, HexagramUncheckedCreateWithoutLinesInput>
    where?: HexagramWhereInput
  }

  export type HexagramUpdateToOneWithWhereWithoutLinesInput = {
    where?: HexagramWhereInput
    data: XOR<HexagramUpdateWithoutLinesInput, HexagramUncheckedUpdateWithoutLinesInput>
  }

  export type HexagramUpdateWithoutLinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    judgment?: StringFieldUpdateOperationsInput | string
    imageText?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    footnote?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: HexagramUpdatetagsInput | string[]
    upperTrigram?: TrigramUpdateOneRequiredWithoutUpperOfNestedInput
    lowerTrigram?: TrigramUpdateOneRequiredWithoutLowerOfNestedInput
    baseForReadings?: ReadingUpdateManyWithoutBaseHexagramNestedInput
    resultForReadings?: ReadingUpdateManyWithoutResultHexagramNestedInput
  }

  export type HexagramUncheckedUpdateWithoutLinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    judgment?: StringFieldUpdateOperationsInput | string
    imageText?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    footnote?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: HexagramUpdatetagsInput | string[]
    upperTrigramId?: IntFieldUpdateOperationsInput | number
    lowerTrigramId?: IntFieldUpdateOperationsInput | number
    baseForReadings?: ReadingUncheckedUpdateManyWithoutBaseHexagramNestedInput
    resultForReadings?: ReadingUncheckedUpdateManyWithoutResultHexagramNestedInput
  }

  export type ReadingCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    method: string
    seed?: string | null
    tossesJson: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingCreatemovingLinesInput | number[]
    question?: string | null
    notes?: string | null
    baseHexagram: HexagramCreateNestedOneWithoutBaseForReadingsInput
    resultHexagram: HexagramCreateNestedOneWithoutResultForReadingsInput
    chats?: ChatSessionCreateNestedManyWithoutReadingInput
    shares?: ShareLinkCreateNestedManyWithoutReadingInput
    favorites?: FavoriteCreateNestedManyWithoutReadingInput
  }

  export type ReadingUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    method: string
    seed?: string | null
    tossesJson: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingCreatemovingLinesInput | number[]
    baseHexagramId: number
    resultHexagramId: number
    question?: string | null
    notes?: string | null
    chats?: ChatSessionUncheckedCreateNestedManyWithoutReadingInput
    shares?: ShareLinkUncheckedCreateNestedManyWithoutReadingInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutReadingInput
  }

  export type ReadingCreateOrConnectWithoutUserInput = {
    where: ReadingWhereUniqueInput
    create: XOR<ReadingCreateWithoutUserInput, ReadingUncheckedCreateWithoutUserInput>
  }

  export type ReadingCreateManyUserInputEnvelope = {
    data: ReadingCreateManyUserInput | ReadingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatSessionCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    Reading: ReadingCreateNestedOneWithoutChatsInput
    messages?: ChatMessageCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionUncheckedCreateWithoutUserInput = {
    id?: string
    readingId: string
    createdAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionCreateOrConnectWithoutUserInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput>
  }

  export type ChatSessionCreateManyUserInputEnvelope = {
    data: ChatSessionCreateManyUserInput | ChatSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    Reading: ReadingCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutUserInput = {
    id?: string
    readingId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteCreateManyUserInputEnvelope = {
    data: FavoriteCreateManyUserInput | FavoriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type JournalEntryCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    title?: string | null
    body: string
  }

  export type JournalEntryUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    title?: string | null
    body: string
  }

  export type JournalEntryCreateOrConnectWithoutUserInput = {
    where: JournalEntryWhereUniqueInput
    create: XOR<JournalEntryCreateWithoutUserInput, JournalEntryUncheckedCreateWithoutUserInput>
  }

  export type JournalEntryCreateManyUserInputEnvelope = {
    data: JournalEntryCreateManyUserInput | JournalEntryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReadingUpsertWithWhereUniqueWithoutUserInput = {
    where: ReadingWhereUniqueInput
    update: XOR<ReadingUpdateWithoutUserInput, ReadingUncheckedUpdateWithoutUserInput>
    create: XOR<ReadingCreateWithoutUserInput, ReadingUncheckedCreateWithoutUserInput>
  }

  export type ReadingUpdateWithWhereUniqueWithoutUserInput = {
    where: ReadingWhereUniqueInput
    data: XOR<ReadingUpdateWithoutUserInput, ReadingUncheckedUpdateWithoutUserInput>
  }

  export type ReadingUpdateManyWithWhereWithoutUserInput = {
    where: ReadingScalarWhereInput
    data: XOR<ReadingUpdateManyMutationInput, ReadingUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatSessionWhereUniqueInput
    update: XOR<ChatSessionUpdateWithoutUserInput, ChatSessionUncheckedUpdateWithoutUserInput>
    create: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput>
  }

  export type ChatSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatSessionWhereUniqueInput
    data: XOR<ChatSessionUpdateWithoutUserInput, ChatSessionUncheckedUpdateWithoutUserInput>
  }

  export type ChatSessionUpdateManyWithWhereWithoutUserInput = {
    where: ChatSessionScalarWhereInput
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatSessionScalarWhereInput = {
    AND?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
    OR?: ChatSessionScalarWhereInput[]
    NOT?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
    id?: StringFilter<"ChatSession"> | string
    userId?: StringNullableFilter<"ChatSession"> | string | null
    readingId?: StringFilter<"ChatSession"> | string
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
  }

  export type FavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteScalarWhereInput = {
    AND?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    OR?: FavoriteScalarWhereInput[]
    NOT?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    id?: StringFilter<"Favorite"> | string
    userId?: StringFilter<"Favorite"> | string
    readingId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
  }

  export type JournalEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: JournalEntryWhereUniqueInput
    update: XOR<JournalEntryUpdateWithoutUserInput, JournalEntryUncheckedUpdateWithoutUserInput>
    create: XOR<JournalEntryCreateWithoutUserInput, JournalEntryUncheckedCreateWithoutUserInput>
  }

  export type JournalEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: JournalEntryWhereUniqueInput
    data: XOR<JournalEntryUpdateWithoutUserInput, JournalEntryUncheckedUpdateWithoutUserInput>
  }

  export type JournalEntryUpdateManyWithWhereWithoutUserInput = {
    where: JournalEntryScalarWhereInput
    data: XOR<JournalEntryUpdateManyMutationInput, JournalEntryUncheckedUpdateManyWithoutUserInput>
  }

  export type JournalEntryScalarWhereInput = {
    AND?: JournalEntryScalarWhereInput | JournalEntryScalarWhereInput[]
    OR?: JournalEntryScalarWhereInput[]
    NOT?: JournalEntryScalarWhereInput | JournalEntryScalarWhereInput[]
    id?: StringFilter<"JournalEntry"> | string
    userId?: StringFilter<"JournalEntry"> | string
    createdAt?: DateTimeFilter<"JournalEntry"> | Date | string
    title?: StringNullableFilter<"JournalEntry"> | string | null
    body?: StringFilter<"JournalEntry"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string
    readings?: ReadingCreateNestedManyWithoutUserInput
    chats?: ChatSessionCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    journal?: JournalEntryCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string
    readings?: ReadingUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    journal?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: ReadingUpdateManyWithoutUserNestedInput
    chats?: ChatSessionUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    journal?: JournalEntryUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: ReadingUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    journal?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string
    readings?: ReadingCreateNestedManyWithoutUserInput
    chats?: ChatSessionCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    journal?: JournalEntryCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string
    readings?: ReadingUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    journal?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: ReadingUpdateManyWithoutUserNestedInput
    chats?: ChatSessionUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    journal?: JournalEntryUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: ReadingUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    journal?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutReadingsInput = {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string
    chats?: ChatSessionCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    journal?: JournalEntryCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReadingsInput = {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string
    chats?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    journal?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReadingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReadingsInput, UserUncheckedCreateWithoutReadingsInput>
  }

  export type HexagramCreateWithoutBaseForReadingsInput = {
    id: number
    key: string
    slug: string
    name: string
    judgment: string
    imageText?: string | null
    comment?: string | null
    footnote?: string | null
    tags?: HexagramCreatetagsInput | string[]
    upperTrigram: TrigramCreateNestedOneWithoutUpperOfInput
    lowerTrigram: TrigramCreateNestedOneWithoutLowerOfInput
    lines?: LineCreateNestedManyWithoutHexagramInput
    resultForReadings?: ReadingCreateNestedManyWithoutResultHexagramInput
  }

  export type HexagramUncheckedCreateWithoutBaseForReadingsInput = {
    id: number
    key: string
    slug: string
    name: string
    judgment: string
    imageText?: string | null
    comment?: string | null
    footnote?: string | null
    tags?: HexagramCreatetagsInput | string[]
    upperTrigramId: number
    lowerTrigramId: number
    lines?: LineUncheckedCreateNestedManyWithoutHexagramInput
    resultForReadings?: ReadingUncheckedCreateNestedManyWithoutResultHexagramInput
  }

  export type HexagramCreateOrConnectWithoutBaseForReadingsInput = {
    where: HexagramWhereUniqueInput
    create: XOR<HexagramCreateWithoutBaseForReadingsInput, HexagramUncheckedCreateWithoutBaseForReadingsInput>
  }

  export type HexagramCreateWithoutResultForReadingsInput = {
    id: number
    key: string
    slug: string
    name: string
    judgment: string
    imageText?: string | null
    comment?: string | null
    footnote?: string | null
    tags?: HexagramCreatetagsInput | string[]
    upperTrigram: TrigramCreateNestedOneWithoutUpperOfInput
    lowerTrigram: TrigramCreateNestedOneWithoutLowerOfInput
    lines?: LineCreateNestedManyWithoutHexagramInput
    baseForReadings?: ReadingCreateNestedManyWithoutBaseHexagramInput
  }

  export type HexagramUncheckedCreateWithoutResultForReadingsInput = {
    id: number
    key: string
    slug: string
    name: string
    judgment: string
    imageText?: string | null
    comment?: string | null
    footnote?: string | null
    tags?: HexagramCreatetagsInput | string[]
    upperTrigramId: number
    lowerTrigramId: number
    lines?: LineUncheckedCreateNestedManyWithoutHexagramInput
    baseForReadings?: ReadingUncheckedCreateNestedManyWithoutBaseHexagramInput
  }

  export type HexagramCreateOrConnectWithoutResultForReadingsInput = {
    where: HexagramWhereUniqueInput
    create: XOR<HexagramCreateWithoutResultForReadingsInput, HexagramUncheckedCreateWithoutResultForReadingsInput>
  }

  export type ChatSessionCreateWithoutReadingInput = {
    id?: string
    createdAt?: Date | string
    User?: UserCreateNestedOneWithoutChatsInput
    messages?: ChatMessageCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionUncheckedCreateWithoutReadingInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionCreateOrConnectWithoutReadingInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutReadingInput, ChatSessionUncheckedCreateWithoutReadingInput>
  }

  export type ChatSessionCreateManyReadingInputEnvelope = {
    data: ChatSessionCreateManyReadingInput | ChatSessionCreateManyReadingInput[]
    skipDuplicates?: boolean
  }

  export type ShareLinkCreateWithoutReadingInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type ShareLinkUncheckedCreateWithoutReadingInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type ShareLinkCreateOrConnectWithoutReadingInput = {
    where: ShareLinkWhereUniqueInput
    create: XOR<ShareLinkCreateWithoutReadingInput, ShareLinkUncheckedCreateWithoutReadingInput>
  }

  export type ShareLinkCreateManyReadingInputEnvelope = {
    data: ShareLinkCreateManyReadingInput | ShareLinkCreateManyReadingInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteCreateWithoutReadingInput = {
    id?: string
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutReadingInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutReadingInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutReadingInput, FavoriteUncheckedCreateWithoutReadingInput>
  }

  export type FavoriteCreateManyReadingInputEnvelope = {
    data: FavoriteCreateManyReadingInput | FavoriteCreateManyReadingInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutReadingsInput = {
    update: XOR<UserUpdateWithoutReadingsInput, UserUncheckedUpdateWithoutReadingsInput>
    create: XOR<UserCreateWithoutReadingsInput, UserUncheckedCreateWithoutReadingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReadingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReadingsInput, UserUncheckedUpdateWithoutReadingsInput>
  }

  export type UserUpdateWithoutReadingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatSessionUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    journal?: JournalEntryUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReadingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    journal?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HexagramUpsertWithoutBaseForReadingsInput = {
    update: XOR<HexagramUpdateWithoutBaseForReadingsInput, HexagramUncheckedUpdateWithoutBaseForReadingsInput>
    create: XOR<HexagramCreateWithoutBaseForReadingsInput, HexagramUncheckedCreateWithoutBaseForReadingsInput>
    where?: HexagramWhereInput
  }

  export type HexagramUpdateToOneWithWhereWithoutBaseForReadingsInput = {
    where?: HexagramWhereInput
    data: XOR<HexagramUpdateWithoutBaseForReadingsInput, HexagramUncheckedUpdateWithoutBaseForReadingsInput>
  }

  export type HexagramUpdateWithoutBaseForReadingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    judgment?: StringFieldUpdateOperationsInput | string
    imageText?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    footnote?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: HexagramUpdatetagsInput | string[]
    upperTrigram?: TrigramUpdateOneRequiredWithoutUpperOfNestedInput
    lowerTrigram?: TrigramUpdateOneRequiredWithoutLowerOfNestedInput
    lines?: LineUpdateManyWithoutHexagramNestedInput
    resultForReadings?: ReadingUpdateManyWithoutResultHexagramNestedInput
  }

  export type HexagramUncheckedUpdateWithoutBaseForReadingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    judgment?: StringFieldUpdateOperationsInput | string
    imageText?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    footnote?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: HexagramUpdatetagsInput | string[]
    upperTrigramId?: IntFieldUpdateOperationsInput | number
    lowerTrigramId?: IntFieldUpdateOperationsInput | number
    lines?: LineUncheckedUpdateManyWithoutHexagramNestedInput
    resultForReadings?: ReadingUncheckedUpdateManyWithoutResultHexagramNestedInput
  }

  export type HexagramUpsertWithoutResultForReadingsInput = {
    update: XOR<HexagramUpdateWithoutResultForReadingsInput, HexagramUncheckedUpdateWithoutResultForReadingsInput>
    create: XOR<HexagramCreateWithoutResultForReadingsInput, HexagramUncheckedCreateWithoutResultForReadingsInput>
    where?: HexagramWhereInput
  }

  export type HexagramUpdateToOneWithWhereWithoutResultForReadingsInput = {
    where?: HexagramWhereInput
    data: XOR<HexagramUpdateWithoutResultForReadingsInput, HexagramUncheckedUpdateWithoutResultForReadingsInput>
  }

  export type HexagramUpdateWithoutResultForReadingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    judgment?: StringFieldUpdateOperationsInput | string
    imageText?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    footnote?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: HexagramUpdatetagsInput | string[]
    upperTrigram?: TrigramUpdateOneRequiredWithoutUpperOfNestedInput
    lowerTrigram?: TrigramUpdateOneRequiredWithoutLowerOfNestedInput
    lines?: LineUpdateManyWithoutHexagramNestedInput
    baseForReadings?: ReadingUpdateManyWithoutBaseHexagramNestedInput
  }

  export type HexagramUncheckedUpdateWithoutResultForReadingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    judgment?: StringFieldUpdateOperationsInput | string
    imageText?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    footnote?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: HexagramUpdatetagsInput | string[]
    upperTrigramId?: IntFieldUpdateOperationsInput | number
    lowerTrigramId?: IntFieldUpdateOperationsInput | number
    lines?: LineUncheckedUpdateManyWithoutHexagramNestedInput
    baseForReadings?: ReadingUncheckedUpdateManyWithoutBaseHexagramNestedInput
  }

  export type ChatSessionUpsertWithWhereUniqueWithoutReadingInput = {
    where: ChatSessionWhereUniqueInput
    update: XOR<ChatSessionUpdateWithoutReadingInput, ChatSessionUncheckedUpdateWithoutReadingInput>
    create: XOR<ChatSessionCreateWithoutReadingInput, ChatSessionUncheckedCreateWithoutReadingInput>
  }

  export type ChatSessionUpdateWithWhereUniqueWithoutReadingInput = {
    where: ChatSessionWhereUniqueInput
    data: XOR<ChatSessionUpdateWithoutReadingInput, ChatSessionUncheckedUpdateWithoutReadingInput>
  }

  export type ChatSessionUpdateManyWithWhereWithoutReadingInput = {
    where: ChatSessionScalarWhereInput
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyWithoutReadingInput>
  }

  export type ShareLinkUpsertWithWhereUniqueWithoutReadingInput = {
    where: ShareLinkWhereUniqueInput
    update: XOR<ShareLinkUpdateWithoutReadingInput, ShareLinkUncheckedUpdateWithoutReadingInput>
    create: XOR<ShareLinkCreateWithoutReadingInput, ShareLinkUncheckedCreateWithoutReadingInput>
  }

  export type ShareLinkUpdateWithWhereUniqueWithoutReadingInput = {
    where: ShareLinkWhereUniqueInput
    data: XOR<ShareLinkUpdateWithoutReadingInput, ShareLinkUncheckedUpdateWithoutReadingInput>
  }

  export type ShareLinkUpdateManyWithWhereWithoutReadingInput = {
    where: ShareLinkScalarWhereInput
    data: XOR<ShareLinkUpdateManyMutationInput, ShareLinkUncheckedUpdateManyWithoutReadingInput>
  }

  export type ShareLinkScalarWhereInput = {
    AND?: ShareLinkScalarWhereInput | ShareLinkScalarWhereInput[]
    OR?: ShareLinkScalarWhereInput[]
    NOT?: ShareLinkScalarWhereInput | ShareLinkScalarWhereInput[]
    id?: StringFilter<"ShareLink"> | string
    readingId?: StringFilter<"ShareLink"> | string
    token?: StringFilter<"ShareLink"> | string
    createdAt?: DateTimeFilter<"ShareLink"> | Date | string
    expiresAt?: DateTimeNullableFilter<"ShareLink"> | Date | string | null
  }

  export type FavoriteUpsertWithWhereUniqueWithoutReadingInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutReadingInput, FavoriteUncheckedUpdateWithoutReadingInput>
    create: XOR<FavoriteCreateWithoutReadingInput, FavoriteUncheckedCreateWithoutReadingInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutReadingInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutReadingInput, FavoriteUncheckedUpdateWithoutReadingInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutReadingInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutReadingInput>
  }

  export type UserCreateWithoutChatsInput = {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string
    readings?: ReadingCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    journal?: JournalEntryCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatsInput = {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string
    readings?: ReadingUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    journal?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
  }

  export type ReadingCreateWithoutChatsInput = {
    id?: string
    createdAt?: Date | string
    method: string
    seed?: string | null
    tossesJson: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingCreatemovingLinesInput | number[]
    question?: string | null
    notes?: string | null
    User?: UserCreateNestedOneWithoutReadingsInput
    baseHexagram: HexagramCreateNestedOneWithoutBaseForReadingsInput
    resultHexagram: HexagramCreateNestedOneWithoutResultForReadingsInput
    shares?: ShareLinkCreateNestedManyWithoutReadingInput
    favorites?: FavoriteCreateNestedManyWithoutReadingInput
  }

  export type ReadingUncheckedCreateWithoutChatsInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
    method: string
    seed?: string | null
    tossesJson: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingCreatemovingLinesInput | number[]
    baseHexagramId: number
    resultHexagramId: number
    question?: string | null
    notes?: string | null
    shares?: ShareLinkUncheckedCreateNestedManyWithoutReadingInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutReadingInput
  }

  export type ReadingCreateOrConnectWithoutChatsInput = {
    where: ReadingWhereUniqueInput
    create: XOR<ReadingCreateWithoutChatsInput, ReadingUncheckedCreateWithoutChatsInput>
  }

  export type ChatMessageCreateWithoutSessionInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageUncheckedCreateWithoutSessionInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutSessionInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput>
  }

  export type ChatMessageCreateManySessionInputEnvelope = {
    data: ChatMessageCreateManySessionInput | ChatMessageCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutChatsInput = {
    update: XOR<UserUpdateWithoutChatsInput, UserUncheckedUpdateWithoutChatsInput>
    create: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatsInput, UserUncheckedUpdateWithoutChatsInput>
  }

  export type UserUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: ReadingUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    journal?: JournalEntryUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: ReadingUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    journal?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReadingUpsertWithoutChatsInput = {
    update: XOR<ReadingUpdateWithoutChatsInput, ReadingUncheckedUpdateWithoutChatsInput>
    create: XOR<ReadingCreateWithoutChatsInput, ReadingUncheckedCreateWithoutChatsInput>
    where?: ReadingWhereInput
  }

  export type ReadingUpdateToOneWithWhereWithoutChatsInput = {
    where?: ReadingWhereInput
    data: XOR<ReadingUpdateWithoutChatsInput, ReadingUncheckedUpdateWithoutChatsInput>
  }

  export type ReadingUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    seed?: NullableStringFieldUpdateOperationsInput | string | null
    tossesJson?: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingUpdatemovingLinesInput | number[]
    question?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutReadingsNestedInput
    baseHexagram?: HexagramUpdateOneRequiredWithoutBaseForReadingsNestedInput
    resultHexagram?: HexagramUpdateOneRequiredWithoutResultForReadingsNestedInput
    shares?: ShareLinkUpdateManyWithoutReadingNestedInput
    favorites?: FavoriteUpdateManyWithoutReadingNestedInput
  }

  export type ReadingUncheckedUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    seed?: NullableStringFieldUpdateOperationsInput | string | null
    tossesJson?: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingUpdatemovingLinesInput | number[]
    baseHexagramId?: IntFieldUpdateOperationsInput | number
    resultHexagramId?: IntFieldUpdateOperationsInput | number
    question?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    shares?: ShareLinkUncheckedUpdateManyWithoutReadingNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutReadingNestedInput
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutSessionInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutSessionInput, ChatMessageUncheckedUpdateWithoutSessionInput>
    create: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutSessionInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutSessionInput, ChatMessageUncheckedUpdateWithoutSessionInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutSessionInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutSessionInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    sessionId?: StringFilter<"ChatMessage"> | string
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type ChatSessionCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    User?: UserCreateNestedOneWithoutChatsInput
    Reading: ReadingCreateNestedOneWithoutChatsInput
  }

  export type ChatSessionUncheckedCreateWithoutMessagesInput = {
    id?: string
    userId?: string | null
    readingId: string
    createdAt?: Date | string
  }

  export type ChatSessionCreateOrConnectWithoutMessagesInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
  }

  export type ChatSessionUpsertWithoutMessagesInput = {
    update: XOR<ChatSessionUpdateWithoutMessagesInput, ChatSessionUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    where?: ChatSessionWhereInput
  }

  export type ChatSessionUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatSessionWhereInput
    data: XOR<ChatSessionUpdateWithoutMessagesInput, ChatSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatSessionUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutChatsNestedInput
    Reading?: ReadingUpdateOneRequiredWithoutChatsNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    readingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReadingCreateWithoutSharesInput = {
    id?: string
    createdAt?: Date | string
    method: string
    seed?: string | null
    tossesJson: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingCreatemovingLinesInput | number[]
    question?: string | null
    notes?: string | null
    User?: UserCreateNestedOneWithoutReadingsInput
    baseHexagram: HexagramCreateNestedOneWithoutBaseForReadingsInput
    resultHexagram: HexagramCreateNestedOneWithoutResultForReadingsInput
    chats?: ChatSessionCreateNestedManyWithoutReadingInput
    favorites?: FavoriteCreateNestedManyWithoutReadingInput
  }

  export type ReadingUncheckedCreateWithoutSharesInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
    method: string
    seed?: string | null
    tossesJson: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingCreatemovingLinesInput | number[]
    baseHexagramId: number
    resultHexagramId: number
    question?: string | null
    notes?: string | null
    chats?: ChatSessionUncheckedCreateNestedManyWithoutReadingInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutReadingInput
  }

  export type ReadingCreateOrConnectWithoutSharesInput = {
    where: ReadingWhereUniqueInput
    create: XOR<ReadingCreateWithoutSharesInput, ReadingUncheckedCreateWithoutSharesInput>
  }

  export type ReadingUpsertWithoutSharesInput = {
    update: XOR<ReadingUpdateWithoutSharesInput, ReadingUncheckedUpdateWithoutSharesInput>
    create: XOR<ReadingCreateWithoutSharesInput, ReadingUncheckedCreateWithoutSharesInput>
    where?: ReadingWhereInput
  }

  export type ReadingUpdateToOneWithWhereWithoutSharesInput = {
    where?: ReadingWhereInput
    data: XOR<ReadingUpdateWithoutSharesInput, ReadingUncheckedUpdateWithoutSharesInput>
  }

  export type ReadingUpdateWithoutSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    seed?: NullableStringFieldUpdateOperationsInput | string | null
    tossesJson?: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingUpdatemovingLinesInput | number[]
    question?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutReadingsNestedInput
    baseHexagram?: HexagramUpdateOneRequiredWithoutBaseForReadingsNestedInput
    resultHexagram?: HexagramUpdateOneRequiredWithoutResultForReadingsNestedInput
    chats?: ChatSessionUpdateManyWithoutReadingNestedInput
    favorites?: FavoriteUpdateManyWithoutReadingNestedInput
  }

  export type ReadingUncheckedUpdateWithoutSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    seed?: NullableStringFieldUpdateOperationsInput | string | null
    tossesJson?: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingUpdatemovingLinesInput | number[]
    baseHexagramId?: IntFieldUpdateOperationsInput | number
    resultHexagramId?: IntFieldUpdateOperationsInput | number
    question?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    chats?: ChatSessionUncheckedUpdateManyWithoutReadingNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutReadingNestedInput
  }

  export type UserCreateWithoutFavoritesInput = {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string
    readings?: ReadingCreateNestedManyWithoutUserInput
    chats?: ChatSessionCreateNestedManyWithoutUserInput
    journal?: JournalEntryCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoritesInput = {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string
    readings?: ReadingUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    journal?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type ReadingCreateWithoutFavoritesInput = {
    id?: string
    createdAt?: Date | string
    method: string
    seed?: string | null
    tossesJson: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingCreatemovingLinesInput | number[]
    question?: string | null
    notes?: string | null
    User?: UserCreateNestedOneWithoutReadingsInput
    baseHexagram: HexagramCreateNestedOneWithoutBaseForReadingsInput
    resultHexagram: HexagramCreateNestedOneWithoutResultForReadingsInput
    chats?: ChatSessionCreateNestedManyWithoutReadingInput
    shares?: ShareLinkCreateNestedManyWithoutReadingInput
  }

  export type ReadingUncheckedCreateWithoutFavoritesInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
    method: string
    seed?: string | null
    tossesJson: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingCreatemovingLinesInput | number[]
    baseHexagramId: number
    resultHexagramId: number
    question?: string | null
    notes?: string | null
    chats?: ChatSessionUncheckedCreateNestedManyWithoutReadingInput
    shares?: ShareLinkUncheckedCreateNestedManyWithoutReadingInput
  }

  export type ReadingCreateOrConnectWithoutFavoritesInput = {
    where: ReadingWhereUniqueInput
    create: XOR<ReadingCreateWithoutFavoritesInput, ReadingUncheckedCreateWithoutFavoritesInput>
  }

  export type UserUpsertWithoutFavoritesInput = {
    update: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: ReadingUpdateManyWithoutUserNestedInput
    chats?: ChatSessionUpdateManyWithoutUserNestedInput
    journal?: JournalEntryUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: ReadingUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    journal?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReadingUpsertWithoutFavoritesInput = {
    update: XOR<ReadingUpdateWithoutFavoritesInput, ReadingUncheckedUpdateWithoutFavoritesInput>
    create: XOR<ReadingCreateWithoutFavoritesInput, ReadingUncheckedCreateWithoutFavoritesInput>
    where?: ReadingWhereInput
  }

  export type ReadingUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: ReadingWhereInput
    data: XOR<ReadingUpdateWithoutFavoritesInput, ReadingUncheckedUpdateWithoutFavoritesInput>
  }

  export type ReadingUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    seed?: NullableStringFieldUpdateOperationsInput | string | null
    tossesJson?: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingUpdatemovingLinesInput | number[]
    question?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutReadingsNestedInput
    baseHexagram?: HexagramUpdateOneRequiredWithoutBaseForReadingsNestedInput
    resultHexagram?: HexagramUpdateOneRequiredWithoutResultForReadingsNestedInput
    chats?: ChatSessionUpdateManyWithoutReadingNestedInput
    shares?: ShareLinkUpdateManyWithoutReadingNestedInput
  }

  export type ReadingUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    seed?: NullableStringFieldUpdateOperationsInput | string | null
    tossesJson?: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingUpdatemovingLinesInput | number[]
    baseHexagramId?: IntFieldUpdateOperationsInput | number
    resultHexagramId?: IntFieldUpdateOperationsInput | number
    question?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    chats?: ChatSessionUncheckedUpdateManyWithoutReadingNestedInput
    shares?: ShareLinkUncheckedUpdateManyWithoutReadingNestedInput
  }

  export type UserCreateWithoutJournalInput = {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string
    readings?: ReadingCreateNestedManyWithoutUserInput
    chats?: ChatSessionCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJournalInput = {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string
    readings?: ReadingUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJournalInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJournalInput, UserUncheckedCreateWithoutJournalInput>
  }

  export type UserUpsertWithoutJournalInput = {
    update: XOR<UserUpdateWithoutJournalInput, UserUncheckedUpdateWithoutJournalInput>
    create: XOR<UserCreateWithoutJournalInput, UserUncheckedCreateWithoutJournalInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJournalInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJournalInput, UserUncheckedUpdateWithoutJournalInput>
  }

  export type UserUpdateWithoutJournalInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: ReadingUpdateManyWithoutUserNestedInput
    chats?: ChatSessionUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJournalInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: ReadingUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HexagramCreateManyUpperTrigramInput = {
    id: number
    key: string
    slug: string
    name: string
    judgment: string
    imageText?: string | null
    comment?: string | null
    footnote?: string | null
    tags?: HexagramCreatetagsInput | string[]
    lowerTrigramId: number
  }

  export type HexagramCreateManyLowerTrigramInput = {
    id: number
    key: string
    slug: string
    name: string
    judgment: string
    imageText?: string | null
    comment?: string | null
    footnote?: string | null
    tags?: HexagramCreatetagsInput | string[]
    upperTrigramId: number
  }

  export type HexagramUpdateWithoutUpperTrigramInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    judgment?: StringFieldUpdateOperationsInput | string
    imageText?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    footnote?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: HexagramUpdatetagsInput | string[]
    lowerTrigram?: TrigramUpdateOneRequiredWithoutLowerOfNestedInput
    lines?: LineUpdateManyWithoutHexagramNestedInput
    baseForReadings?: ReadingUpdateManyWithoutBaseHexagramNestedInput
    resultForReadings?: ReadingUpdateManyWithoutResultHexagramNestedInput
  }

  export type HexagramUncheckedUpdateWithoutUpperTrigramInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    judgment?: StringFieldUpdateOperationsInput | string
    imageText?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    footnote?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: HexagramUpdatetagsInput | string[]
    lowerTrigramId?: IntFieldUpdateOperationsInput | number
    lines?: LineUncheckedUpdateManyWithoutHexagramNestedInput
    baseForReadings?: ReadingUncheckedUpdateManyWithoutBaseHexagramNestedInput
    resultForReadings?: ReadingUncheckedUpdateManyWithoutResultHexagramNestedInput
  }

  export type HexagramUncheckedUpdateManyWithoutUpperTrigramInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    judgment?: StringFieldUpdateOperationsInput | string
    imageText?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    footnote?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: HexagramUpdatetagsInput | string[]
    lowerTrigramId?: IntFieldUpdateOperationsInput | number
  }

  export type HexagramUpdateWithoutLowerTrigramInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    judgment?: StringFieldUpdateOperationsInput | string
    imageText?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    footnote?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: HexagramUpdatetagsInput | string[]
    upperTrigram?: TrigramUpdateOneRequiredWithoutUpperOfNestedInput
    lines?: LineUpdateManyWithoutHexagramNestedInput
    baseForReadings?: ReadingUpdateManyWithoutBaseHexagramNestedInput
    resultForReadings?: ReadingUpdateManyWithoutResultHexagramNestedInput
  }

  export type HexagramUncheckedUpdateWithoutLowerTrigramInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    judgment?: StringFieldUpdateOperationsInput | string
    imageText?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    footnote?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: HexagramUpdatetagsInput | string[]
    upperTrigramId?: IntFieldUpdateOperationsInput | number
    lines?: LineUncheckedUpdateManyWithoutHexagramNestedInput
    baseForReadings?: ReadingUncheckedUpdateManyWithoutBaseHexagramNestedInput
    resultForReadings?: ReadingUncheckedUpdateManyWithoutResultHexagramNestedInput
  }

  export type HexagramUncheckedUpdateManyWithoutLowerTrigramInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    judgment?: StringFieldUpdateOperationsInput | string
    imageText?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    footnote?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: HexagramUpdatetagsInput | string[]
    upperTrigramId?: IntFieldUpdateOperationsInput | number
  }

  export type LineCreateManyHexagramInput = {
    id?: number
    number: number
    text: string
  }

  export type ReadingCreateManyBaseHexagramInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
    method: string
    seed?: string | null
    tossesJson: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingCreatemovingLinesInput | number[]
    resultHexagramId: number
    question?: string | null
    notes?: string | null
  }

  export type ReadingCreateManyResultHexagramInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
    method: string
    seed?: string | null
    tossesJson: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingCreatemovingLinesInput | number[]
    baseHexagramId: number
    question?: string | null
    notes?: string | null
  }

  export type LineUpdateWithoutHexagramInput = {
    number?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type LineUncheckedUpdateWithoutHexagramInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type LineUncheckedUpdateManyWithoutHexagramInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ReadingUpdateWithoutBaseHexagramInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    seed?: NullableStringFieldUpdateOperationsInput | string | null
    tossesJson?: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingUpdatemovingLinesInput | number[]
    question?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutReadingsNestedInput
    resultHexagram?: HexagramUpdateOneRequiredWithoutResultForReadingsNestedInput
    chats?: ChatSessionUpdateManyWithoutReadingNestedInput
    shares?: ShareLinkUpdateManyWithoutReadingNestedInput
    favorites?: FavoriteUpdateManyWithoutReadingNestedInput
  }

  export type ReadingUncheckedUpdateWithoutBaseHexagramInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    seed?: NullableStringFieldUpdateOperationsInput | string | null
    tossesJson?: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingUpdatemovingLinesInput | number[]
    resultHexagramId?: IntFieldUpdateOperationsInput | number
    question?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    chats?: ChatSessionUncheckedUpdateManyWithoutReadingNestedInput
    shares?: ShareLinkUncheckedUpdateManyWithoutReadingNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutReadingNestedInput
  }

  export type ReadingUncheckedUpdateManyWithoutBaseHexagramInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    seed?: NullableStringFieldUpdateOperationsInput | string | null
    tossesJson?: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingUpdatemovingLinesInput | number[]
    resultHexagramId?: IntFieldUpdateOperationsInput | number
    question?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReadingUpdateWithoutResultHexagramInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    seed?: NullableStringFieldUpdateOperationsInput | string | null
    tossesJson?: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingUpdatemovingLinesInput | number[]
    question?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutReadingsNestedInput
    baseHexagram?: HexagramUpdateOneRequiredWithoutBaseForReadingsNestedInput
    chats?: ChatSessionUpdateManyWithoutReadingNestedInput
    shares?: ShareLinkUpdateManyWithoutReadingNestedInput
    favorites?: FavoriteUpdateManyWithoutReadingNestedInput
  }

  export type ReadingUncheckedUpdateWithoutResultHexagramInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    seed?: NullableStringFieldUpdateOperationsInput | string | null
    tossesJson?: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingUpdatemovingLinesInput | number[]
    baseHexagramId?: IntFieldUpdateOperationsInput | number
    question?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    chats?: ChatSessionUncheckedUpdateManyWithoutReadingNestedInput
    shares?: ShareLinkUncheckedUpdateManyWithoutReadingNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutReadingNestedInput
  }

  export type ReadingUncheckedUpdateManyWithoutResultHexagramInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    seed?: NullableStringFieldUpdateOperationsInput | string | null
    tossesJson?: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingUpdatemovingLinesInput | number[]
    baseHexagramId?: IntFieldUpdateOperationsInput | number
    question?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReadingCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    method: string
    seed?: string | null
    tossesJson: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingCreatemovingLinesInput | number[]
    baseHexagramId: number
    resultHexagramId: number
    question?: string | null
    notes?: string | null
  }

  export type ChatSessionCreateManyUserInput = {
    id?: string
    readingId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateManyUserInput = {
    id?: string
    readingId: string
    createdAt?: Date | string
  }

  export type JournalEntryCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    title?: string | null
    body: string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type ReadingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    seed?: NullableStringFieldUpdateOperationsInput | string | null
    tossesJson?: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingUpdatemovingLinesInput | number[]
    question?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    baseHexagram?: HexagramUpdateOneRequiredWithoutBaseForReadingsNestedInput
    resultHexagram?: HexagramUpdateOneRequiredWithoutResultForReadingsNestedInput
    chats?: ChatSessionUpdateManyWithoutReadingNestedInput
    shares?: ShareLinkUpdateManyWithoutReadingNestedInput
    favorites?: FavoriteUpdateManyWithoutReadingNestedInput
  }

  export type ReadingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    seed?: NullableStringFieldUpdateOperationsInput | string | null
    tossesJson?: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingUpdatemovingLinesInput | number[]
    baseHexagramId?: IntFieldUpdateOperationsInput | number
    resultHexagramId?: IntFieldUpdateOperationsInput | number
    question?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    chats?: ChatSessionUncheckedUpdateManyWithoutReadingNestedInput
    shares?: ShareLinkUncheckedUpdateManyWithoutReadingNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutReadingNestedInput
  }

  export type ReadingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: StringFieldUpdateOperationsInput | string
    seed?: NullableStringFieldUpdateOperationsInput | string | null
    tossesJson?: JsonNullValueInput | InputJsonValue
    movingLines?: ReadingUpdatemovingLinesInput | number[]
    baseHexagramId?: IntFieldUpdateOperationsInput | number
    resultHexagramId?: IntFieldUpdateOperationsInput | number
    question?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Reading?: ReadingUpdateOneRequiredWithoutChatsNestedInput
    messages?: ChatMessageUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    readingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    readingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Reading?: ReadingUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    readingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    readingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalEntryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
  }

  export type JournalEntryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
  }

  export type JournalEntryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionCreateManyReadingInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
  }

  export type ShareLinkCreateManyReadingInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type FavoriteCreateManyReadingInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type ChatSessionUpdateWithoutReadingInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutChatsNestedInput
    messages?: ChatMessageUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutReadingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateManyWithoutReadingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareLinkUpdateWithoutReadingInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShareLinkUncheckedUpdateWithoutReadingInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShareLinkUncheckedUpdateManyWithoutReadingInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FavoriteUpdateWithoutReadingInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutReadingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutReadingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManySessionInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
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