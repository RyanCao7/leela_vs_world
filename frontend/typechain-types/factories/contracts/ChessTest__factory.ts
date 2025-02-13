/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { ChessTest, ChessTestInterface } from "../../contracts/ChessTest";

const _abi = [
  {
    inputs: [],
    name: "game_state",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getGameState",
    outputs: [
      {
        internalType: "uint256[64]",
        name: "_game_state_array",
        type: "uint256[64]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "movePawn",
    outputs: [
      {
        internalType: "uint256",
        name: "_new_game_state",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040527fcbaedabc999999990000000000000000000000000000000011111111432652346000556001805460ff1916905534801561003e57600080fd5b506102638061004e6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80638ae43b5414610046578063b7d0628b14610065578063e2a059091461007a575b600080fd5b61004f60005481565b60405161005c9190610173565b60405180910390f35b61006d610082565b60405161005c91906101ae565b61004f6100df565b61008a610154565b60005b60408160ff1610156100db576100a48160046101d3565b60ff16600054901c600f16828260ff16604081106100c4576100c46101fa565b6020020152806100d381610210565b91505061008d565b5090565b60015460009060ff1615610116577fcbaedabc9999999900000000000000000000000000000000111111114326523460005561013b565b7fcbaedabc099999999000000000000000000000000000000011111111432652346000555b506001805460ff19811660ff9091161517905560005490565b6040518061080001604052806040906020820280368337509192915050565b818152602081015b92915050565b6040818060005b838110156101a6578151865260209586019590910190600101610188565b505050505050565b610800810161017b8284610181565b634e487b7160e01b600052601160045260246000fd5b60ff9182169190811690828202908116908181146101f3576101f36101bd565b5092915050565b634e487b7160e01b600052603260045260246000fd5b60ff16600060fe198201610226576102266101bd565b506001019056fea2646970667358221220843129e3c7d8a39f8647954e9f0ebc124998297902a039bd4fbc03f4a5e125f764736f6c63430008110033";

type ChessTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChessTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ChessTest__factory extends ContractFactory {
  constructor(...args: ChessTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ChessTest> {
    return super.deploy(overrides || {}) as Promise<ChessTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ChessTest {
    return super.attach(address) as ChessTest;
  }
  override connect(signer: Signer): ChessTest__factory {
    return super.connect(signer) as ChessTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChessTestInterface {
    return new utils.Interface(_abi) as ChessTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChessTest {
    return new Contract(address, _abi, signerOrProvider) as ChessTest;
  }
}
