/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

type ErrorWithCode = Error & { code: number };
type MaybeErrorWithCode = ErrorWithCode | null | undefined;

const createErrorFromCodeLookup: Map<number, () => ErrorWithCode> = new Map();
const createErrorFromNameLookup: Map<string, () => ErrorWithCode> = new Map();

/**
 * InvalidMarketParameters: 'Invalid market parameters error'
 *
 * @category Errors
 * @category generated
 */
export class InvalidMarketParametersError extends Error {
  readonly code: number = 0x0;
  readonly name: string = "InvalidMarketParameters";
  constructor() {
    super("Invalid market parameters error");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, InvalidMarketParametersError);
    }
  }
}

createErrorFromCodeLookup.set(0x0, () => new InvalidMarketParametersError());
createErrorFromNameLookup.set(
  "InvalidMarketParameters",
  () => new InvalidMarketParametersError()
);

/**
 * InvalidMarketAuthority: 'Invalid exchange authority error'
 *
 * @category Errors
 * @category generated
 */
export class InvalidMarketAuthorityError extends Error {
  readonly code: number = 0x1;
  readonly name: string = "InvalidMarketAuthority";
  constructor() {
    super("Invalid exchange authority error");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, InvalidMarketAuthorityError);
    }
  }
}

createErrorFromCodeLookup.set(0x1, () => new InvalidMarketAuthorityError());
createErrorFromNameLookup.set(
  "InvalidMarketAuthority",
  () => new InvalidMarketAuthorityError()
);

/**
 * FailedToLoadMarketFromAccount: 'Market deserialization error'
 *
 * @category Errors
 * @category generated
 */
export class FailedToLoadMarketFromAccountError extends Error {
  readonly code: number = 0x2;
  readonly name: string = "FailedToLoadMarketFromAccount";
  constructor() {
    super("Market deserialization error");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, FailedToLoadMarketFromAccountError);
    }
  }
}

createErrorFromCodeLookup.set(
  0x2,
  () => new FailedToLoadMarketFromAccountError()
);
createErrorFromNameLookup.set(
  "FailedToLoadMarketFromAccount",
  () => new FailedToLoadMarketFromAccountError()
);

/**
 * MarketAlreadyInitialized: 'Market already initialized error'
 *
 * @category Errors
 * @category generated
 */
export class MarketAlreadyInitializedError extends Error {
  readonly code: number = 0x3;
  readonly name: string = "MarketAlreadyInitialized";
  constructor() {
    super("Market already initialized error");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, MarketAlreadyInitializedError);
    }
  }
}

createErrorFromCodeLookup.set(0x3, () => new MarketAlreadyInitializedError());
createErrorFromNameLookup.set(
  "MarketAlreadyInitialized",
  () => new MarketAlreadyInitializedError()
);

/**
 * MarketUninitialized: 'Market is not initialized error'
 *
 * @category Errors
 * @category generated
 */
export class MarketUninitializedError extends Error {
  readonly code: number = 0x4;
  readonly name: string = "MarketUninitialized";
  constructor() {
    super("Market is not initialized error");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, MarketUninitializedError);
    }
  }
}

createErrorFromCodeLookup.set(0x4, () => new MarketUninitializedError());
createErrorFromNameLookup.set(
  "MarketUninitialized",
  () => new MarketUninitializedError()
);

/**
 * InvalidStateTransition: 'Invalid state transition error'
 *
 * @category Errors
 * @category generated
 */
export class InvalidStateTransitionError extends Error {
  readonly code: number = 0x5;
  readonly name: string = "InvalidStateTransition";
  constructor() {
    super("Invalid state transition error");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, InvalidStateTransitionError);
    }
  }
}

createErrorFromCodeLookup.set(0x5, () => new InvalidStateTransitionError());
createErrorFromNameLookup.set(
  "InvalidStateTransition",
  () => new InvalidStateTransitionError()
);

/**
 * InvalidMarketSigner: 'Invalid market signer error'
 *
 * @category Errors
 * @category generated
 */
export class InvalidMarketSignerError extends Error {
  readonly code: number = 0x6;
  readonly name: string = "InvalidMarketSigner";
  constructor() {
    super("Invalid market signer error");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, InvalidMarketSignerError);
    }
  }
}

createErrorFromCodeLookup.set(0x6, () => new InvalidMarketSignerError());
createErrorFromNameLookup.set(
  "InvalidMarketSigner",
  () => new InvalidMarketSignerError()
);

/**
 * InvalidLotSize: 'Invalid lot size error'
 *
 * @category Errors
 * @category generated
 */
export class InvalidLotSizeError extends Error {
  readonly code: number = 0x7;
  readonly name: string = "InvalidLotSize";
  constructor() {
    super("Invalid lot size error");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, InvalidLotSizeError);
    }
  }
}

createErrorFromCodeLookup.set(0x7, () => new InvalidLotSizeError());
createErrorFromNameLookup.set(
  "InvalidLotSize",
  () => new InvalidLotSizeError()
);

/**
 * InvalidTickSize: 'Invalid tick size error'
 *
 * @category Errors
 * @category generated
 */
export class InvalidTickSizeError extends Error {
  readonly code: number = 0x8;
  readonly name: string = "InvalidTickSize";
  constructor() {
    super("Invalid tick size error");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, InvalidTickSizeError);
    }
  }
}

createErrorFromCodeLookup.set(0x8, () => new InvalidTickSizeError());
createErrorFromNameLookup.set(
  "InvalidTickSize",
  () => new InvalidTickSizeError()
);

/**
 * InvalidMint: 'Invalid mint error'
 *
 * @category Errors
 * @category generated
 */
export class InvalidMintError extends Error {
  readonly code: number = 0x9;
  readonly name: string = "InvalidMint";
  constructor() {
    super("Invalid mint error");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, InvalidMintError);
    }
  }
}

createErrorFromCodeLookup.set(0x9, () => new InvalidMintError());
createErrorFromNameLookup.set("InvalidMint", () => new InvalidMintError());

/**
 * InvalidBaseVault: 'Invalid base vault error'
 *
 * @category Errors
 * @category generated
 */
export class InvalidBaseVaultError extends Error {
  readonly code: number = 0xa;
  readonly name: string = "InvalidBaseVault";
  constructor() {
    super("Invalid base vault error");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, InvalidBaseVaultError);
    }
  }
}

createErrorFromCodeLookup.set(0xa, () => new InvalidBaseVaultError());
createErrorFromNameLookup.set(
  "InvalidBaseVault",
  () => new InvalidBaseVaultError()
);

/**
 * InvalidQuoteVault: 'Invalid quote vault error'
 *
 * @category Errors
 * @category generated
 */
export class InvalidQuoteVaultError extends Error {
  readonly code: number = 0xb;
  readonly name: string = "InvalidQuoteVault";
  constructor() {
    super("Invalid quote vault error");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, InvalidQuoteVaultError);
    }
  }
}

createErrorFromCodeLookup.set(0xb, () => new InvalidQuoteVaultError());
createErrorFromNameLookup.set(
  "InvalidQuoteVault",
  () => new InvalidQuoteVaultError()
);

/**
 * InvalidBaseAccount: 'Invalid base account error'
 *
 * @category Errors
 * @category generated
 */
export class InvalidBaseAccountError extends Error {
  readonly code: number = 0xc;
  readonly name: string = "InvalidBaseAccount";
  constructor() {
    super("Invalid base account error");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, InvalidBaseAccountError);
    }
  }
}

createErrorFromCodeLookup.set(0xc, () => new InvalidBaseAccountError());
createErrorFromNameLookup.set(
  "InvalidBaseAccount",
  () => new InvalidBaseAccountError()
);

/**
 * InvalidQuoteAccount: 'Invalid quote account error'
 *
 * @category Errors
 * @category generated
 */
export class InvalidQuoteAccountError extends Error {
  readonly code: number = 0xd;
  readonly name: string = "InvalidQuoteAccount";
  constructor() {
    super("Invalid quote account error");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, InvalidQuoteAccountError);
    }
  }
}

createErrorFromCodeLookup.set(0xd, () => new InvalidQuoteAccountError());
createErrorFromNameLookup.set(
  "InvalidQuoteAccount",
  () => new InvalidQuoteAccountError()
);

/**
 * TooManyEvents: 'Too many events error'
 *
 * @category Errors
 * @category generated
 */
export class TooManyEventsError extends Error {
  readonly code: number = 0xe;
  readonly name: string = "TooManyEvents";
  constructor() {
    super("Too many events error");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, TooManyEventsError);
    }
  }
}

createErrorFromCodeLookup.set(0xe, () => new TooManyEventsError());
createErrorFromNameLookup.set("TooManyEvents", () => new TooManyEventsError());

/**
 * NewOrderError: 'New order error'
 *
 * @category Errors
 * @category generated
 */
export class NewOrderErrorError extends Error {
  readonly code: number = 0xf;
  readonly name: string = "NewOrderError";
  constructor() {
    super("New order error");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, NewOrderErrorError);
    }
  }
}

createErrorFromCodeLookup.set(0xf, () => new NewOrderErrorError());
createErrorFromNameLookup.set("NewOrderError", () => new NewOrderErrorError());

/**
 * ReduceOrderError: 'Reduce order error'
 *
 * @category Errors
 * @category generated
 */
export class ReduceOrderErrorError extends Error {
  readonly code: number = 0x10;
  readonly name: string = "ReduceOrderError";
  constructor() {
    super("Reduce order error");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, ReduceOrderErrorError);
    }
  }
}

createErrorFromCodeLookup.set(0x10, () => new ReduceOrderErrorError());
createErrorFromNameLookup.set(
  "ReduceOrderError",
  () => new ReduceOrderErrorError()
);

/**
 * CancelMultipleOrdersError: 'Cancel multiple orders error'
 *
 * @category Errors
 * @category generated
 */
export class CancelMultipleOrdersErrorError extends Error {
  readonly code: number = 0x11;
  readonly name: string = "CancelMultipleOrdersError";
  constructor() {
    super("Cancel multiple orders error");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, CancelMultipleOrdersErrorError);
    }
  }
}

createErrorFromCodeLookup.set(0x11, () => new CancelMultipleOrdersErrorError());
createErrorFromNameLookup.set(
  "CancelMultipleOrdersError",
  () => new CancelMultipleOrdersErrorError()
);

/**
 * WithdrawFundsError: 'Withdraw funds error'
 *
 * @category Errors
 * @category generated
 */
export class WithdrawFundsErrorError extends Error {
  readonly code: number = 0x12;
  readonly name: string = "WithdrawFundsError";
  constructor() {
    super("Withdraw funds error");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, WithdrawFundsErrorError);
    }
  }
}

createErrorFromCodeLookup.set(0x12, () => new WithdrawFundsErrorError());
createErrorFromNameLookup.set(
  "WithdrawFundsError",
  () => new WithdrawFundsErrorError()
);

/**
 * RemoveEmptyOrdersError: 'Remove empty orders error'
 *
 * @category Errors
 * @category generated
 */
export class RemoveEmptyOrdersErrorError extends Error {
  readonly code: number = 0x13;
  readonly name: string = "RemoveEmptyOrdersError";
  constructor() {
    super("Remove empty orders error");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, RemoveEmptyOrdersErrorError);
    }
  }
}

createErrorFromCodeLookup.set(0x13, () => new RemoveEmptyOrdersErrorError());
createErrorFromNameLookup.set(
  "RemoveEmptyOrdersError",
  () => new RemoveEmptyOrdersErrorError()
);

/**
 * TraderNotFound: 'Trader not found error'
 *
 * @category Errors
 * @category generated
 */
export class TraderNotFoundError extends Error {
  readonly code: number = 0x14;
  readonly name: string = "TraderNotFound";
  constructor() {
    super("Trader not found error");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, TraderNotFoundError);
    }
  }
}

createErrorFromCodeLookup.set(0x14, () => new TraderNotFoundError());
createErrorFromNameLookup.set(
  "TraderNotFound",
  () => new TraderNotFoundError()
);

/**
 * InvalidSeatStatus: 'Invalid seat status'
 *
 * @category Errors
 * @category generated
 */
export class InvalidSeatStatusError extends Error {
  readonly code: number = 0x15;
  readonly name: string = "InvalidSeatStatus";
  constructor() {
    super("Invalid seat status");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, InvalidSeatStatusError);
    }
  }
}

createErrorFromCodeLookup.set(0x15, () => new InvalidSeatStatusError());
createErrorFromNameLookup.set(
  "InvalidSeatStatus",
  () => new InvalidSeatStatusError()
);

/**
 * EvictionError: 'Failed to evict trader'
 *
 * @category Errors
 * @category generated
 */
export class EvictionErrorError extends Error {
  readonly code: number = 0x16;
  readonly name: string = "EvictionError";
  constructor() {
    super("Failed to evict trader");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, EvictionErrorError);
    }
  }
}

createErrorFromCodeLookup.set(0x16, () => new EvictionErrorError());
createErrorFromNameLookup.set("EvictionError", () => new EvictionErrorError());

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 * @category generated
 */
export function errorFromCode(code: number): MaybeErrorWithCode {
  const createError = createErrorFromCodeLookup.get(code);
  return createError != null ? createError() : null;
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 * @category generated
 */
export function errorFromName(name: string): MaybeErrorWithCode {
  const createError = createErrorFromNameLookup.get(name);
  return createError != null ? createError() : null;
}
