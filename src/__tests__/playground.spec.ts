import { WETH } from '..';
import { ChainId } from '../enums/chain-id';
import { UniswapPair } from '../factories/pair/uniswap-pair';

const routeTest = async () => {
  const fromTokenContractAddress = '0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b';
  const toTokenContractAddress = '0x1985365e9f78359a9B6AD760e32412f4a445E862';
  const ethereumAddress = '0xB1E6079212888f0bE0cf55874B2EB9d7a5e02cD9';

  const uniswapPair = new UniswapPair(
    WETH.MAINNET().contractAddress,
    toTokenContractAddress,
    ethereumAddress,
    ChainId.MAINNET
  );

  const uniswapPairFactory = await uniswapPair.createFactory();

  const trade = await uniswapPairFactory.trade('10');
  console.log(JSON.stringify(trade));

  // const toToken = uniswapPairFactory.toToken;
  // console.log(toToken);

  // const fromToken = uniswapPairFactory.fromToken;
  // console.log(fromToken);

  // const tokenContractAddress = '0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b';

  // const tokenFactoryPublic = new TokenFactoryPublic(
  //   fromTokenContractAddress,
  //   ChainId.MAINNET
  // );

  // console.log(
  //   await tokenFactoryPublic.getAllowanceAndBalanceOf(ethereumAddress)
  // );

  // // the contract address for which you are allowing to move tokens on your behalf
  // const spender = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';

  // // the amount you wish to allow them to move, this example just uses the max
  // // hex. If not each time they do a operation which needs to move tokens then
  // // it will cost them 2 transactions, 1 to approve the allowance then 1 to actually
  // // do the contract call to move the tokens.
  // const value =
  //   '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';

  // const data = tokenFactoryPublic.generateApproveAllowanceData(spender, value);
  // console.log(data);
};

routeTest();