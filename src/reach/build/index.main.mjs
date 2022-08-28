// Automatically generated with Reach 0.1.11 (7d2358ff)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (7d2358ff)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc1, ctc1, ctc1, ctc1],
      4: [ctc0, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Oracle(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Oracle expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Oracle expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc2 = stdlib.T_Tuple([ctc1]);
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '600'));
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Null;
  
  
  const v227 = stdlib.protect(ctc0, interact.price, 'for Oracle\'s interact field price');
  const v228 = stdlib.protect(ctc0, interact.subscribers, 'for Oracle\'s interact field subscribers');
  
  const txn1 = await (ctc.sendrecv({
    args: [v227, v228],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:24:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:24:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v232, v233], secs: v235, time: v234, didSend: v29, from: v231 } = txn1;
      
      ;
      const v237 = stdlib.checkedBigNumberify('./index.rsh:29:22:decimal', stdlib.UInt_max, '0');
      const v238 = v234;
      const v241 = stdlib.checkedBigNumberify('./index.rsh:18:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v246 = stdlib.lt(v237, v233);
        
        return v246;})()) {
        sim_r.isHalt = false;
        }
      else {
        
        sim_r.txns.push({
          kind: 'from',
          to: v231,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v232, v233], secs: v235, time: v234, didSend: v29, from: v231 } = txn1;
  ;
  let v237 = stdlib.checkedBigNumberify('./index.rsh:29:22:decimal', stdlib.UInt_max, '0');
  let v238 = v234;
  let v241 = stdlib.checkedBigNumberify('./index.rsh:18:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v246 = stdlib.lt(v237, v233);
    
    return v246;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v264], secs: v266, time: v265, didSend: v153, from: v263 } = txn2;
    undefined /* setApiDetails */;
    const v268 = v264[stdlib.checkedBigNumberify('./index.rsh:32:12:spread', stdlib.UInt_max, '0')];
    const v269 = stdlib.addressEq(v263, v231);
    const v270 = v269 ? false : true;
    stdlib.assert(v270, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:33:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:32:39:application call to [unknown function] (defined at: ./index.rsh:32:39:function exp)', 'at ./index.rsh:32:39:application call to [unknown function] (defined at: ./index.rsh:32:39:function exp)'],
      msg: null,
      who: 'Oracle'
      });
    const v272 = stdlib.mul(v232, stdlib.checkedBigNumberify('./index.rsh:35:25:decimal', stdlib.UInt_max, '1000000'));
    const v274 = stdlib.add(v241, v272);
    ;
    const v280 = true;
    await txn2.getOutput('Users_getHoroscope', 'v280', ctc3, v280);
    const v289 = stdlib.protect(ctc4, await interact.horoscope(v268), {
      at: './index.rsh:40:60:application',
      fs: ['at ./index.rsh:39:22:application call to [unknown function] (defined at: ./index.rsh:39:26:function exp)', 'at ./index.rsh:35:44:application call to [unknown function] (defined at: ./index.rsh:35:44:function exp)'],
      msg: 'horoscope',
      who: 'Oracle'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v231, v232, v233, v237, v274, v289],
      evt_cnt: 1,
      funcNum: 3,
      lct: v265,
      onlyIf: true,
      out_tys: [ctc4],
      pay: [stdlib.checkedBigNumberify('./index.rsh:42:18:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v291], secs: v293, time: v292, didSend: v192, from: v290 } = txn3;
        
        ;
        const v298 = stdlib.add(v237, stdlib.checkedBigNumberify('./index.rsh:51:30:decimal', stdlib.UInt_max, '1'));
        const cv237 = v298;
        const cv238 = v292;
        const cv241 = v274;
        
        await (async () => {
          const v237 = cv237;
          const v238 = cv238;
          const v241 = cv241;
          
          if (await (async () => {
            const v246 = stdlib.lt(v237, v233);
            
            return v246;})()) {
            sim_r.isHalt = false;
            }
          else {
            
            sim_r.txns.push({
              kind: 'from',
              to: v231,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc5, ctc0, ctc0, ctc0, ctc0, ctc4],
      waitIfNotPresent: false
      }));
    const {data: [v291], secs: v293, time: v292, didSend: v192, from: v290 } = txn3;
    ;
    const v294 = stdlib.addressEq(v231, v290);
    stdlib.assert(v294, {
      at: './index.rsh:42:18:dot',
      fs: ['at ./index.rsh:35:44:application call to [unknown function] (defined at: ./index.rsh:35:44:function exp)'],
      msg: 'sender correct',
      who: 'Oracle'
      });
    const v298 = stdlib.add(v237, stdlib.checkedBigNumberify('./index.rsh:51:30:decimal', stdlib.UInt_max, '1'));
    const cv237 = v298;
    const cv238 = v292;
    const cv241 = v274;
    
    v237 = cv237;
    v238 = cv238;
    v241 = cv241;
    
    continue;
    
    
    
    }
  stdlib.protect(ctc6, await interact.end(), {
    at: './index.rsh:55:24:application',
    fs: ['at ./index.rsh:55:24:application call to [unknown function] (defined at: ./index.rsh:55:24:function exp)', 'at ./index.rsh:55:24:application call to "liftedInteract" (defined at: ./index.rsh:55:24:application)'],
    msg: 'end',
    who: 'Oracle'
    });
  
  ;
  return;
  
  
  };
export async function UserView(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for UserView expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for UserView expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '600'));
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v232, v233], secs: v235, time: v234, didSend: v29, from: v231 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.seePrice(v232), {
    at: './index.rsh:26:31:application',
    fs: ['at ./index.rsh:26:31:application call to [unknown function] (defined at: ./index.rsh:26:31:function exp)', 'at ./index.rsh:26:31:application call to "liftedInteract" (defined at: ./index.rsh:26:31:application)'],
    msg: 'seePrice',
    who: 'UserView'
    });
  
  let v237 = stdlib.checkedBigNumberify('./index.rsh:29:22:decimal', stdlib.UInt_max, '0');
  let v238 = v234;
  let v241 = stdlib.checkedBigNumberify('./index.rsh:18:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v246 = stdlib.lt(v237, v233);
    
    return v246;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v264], secs: v266, time: v265, didSend: v153, from: v263 } = txn2;
    undefined /* setApiDetails */;
    const v269 = stdlib.addressEq(v263, v231);
    const v270 = v269 ? false : true;
    stdlib.assert(v270, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:33:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:32:39:application call to [unknown function] (defined at: ./index.rsh:32:39:function exp)', 'at ./index.rsh:32:39:application call to [unknown function] (defined at: ./index.rsh:32:39:function exp)'],
      msg: null,
      who: 'UserView'
      });
    const v272 = stdlib.mul(v232, stdlib.checkedBigNumberify('./index.rsh:35:25:decimal', stdlib.UInt_max, '1000000'));
    const v274 = stdlib.add(v241, v272);
    ;
    const v280 = true;
    await txn2.getOutput('Users_getHoroscope', 'v280', ctc4, v280);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v291], secs: v293, time: v292, didSend: v192, from: v290 } = txn3;
    ;
    const v294 = stdlib.addressEq(v231, v290);
    stdlib.assert(v294, {
      at: './index.rsh:42:18:dot',
      fs: ['at ./index.rsh:35:44:application call to [unknown function] (defined at: ./index.rsh:35:44:function exp)'],
      msg: 'sender correct',
      who: 'UserView'
      });
    const v295 = ctc.selfAddress();
    const v297 = stdlib.addressEq(v295, v263);
    if (v297) {
      stdlib.protect(ctc1, await interact.seeHoroscope(v291), {
        at: './index.rsh:47:36:application',
        fs: ['at ./index.rsh:44:24:application call to [unknown function] (defined at: ./index.rsh:44:28:function exp)', 'at ./index.rsh:35:44:application call to [unknown function] (defined at: ./index.rsh:35:44:function exp)'],
        msg: 'seeHoroscope',
        who: 'UserView'
        });
      }
    else {
      }
    
    const v298 = stdlib.add(v237, stdlib.checkedBigNumberify('./index.rsh:51:30:decimal', stdlib.UInt_max, '1'));
    const cv237 = v298;
    const cv238 = v292;
    const cv241 = v274;
    
    v237 = cv237;
    v238 = cv238;
    v241 = cv241;
    
    continue;
    
    
    
    }
  stdlib.protect(ctc1, await interact.end(), {
    at: './index.rsh:56:26:application',
    fs: ['at ./index.rsh:56:26:application call to [unknown function] (defined at: ./index.rsh:56:26:function exp)', 'at ./index.rsh:56:26:application call to "liftedInteract" (defined at: ./index.rsh:56:26:application)'],
    msg: 'end',
    who: 'UserView'
    });
  
  ;
  return;
  
  
  };
export async function _Users_getHoroscope3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Users_getHoroscope3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Users_getHoroscope3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Null;
  
  
  const [v231, v232, v233, v237, v241] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc1, ctc1, ctc1]);
  const v247 = ctc.selfAddress();
  const v249 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:32:39:application call to [unknown function] (defined at: ./index.rsh:32:39:function exp)', 'at ./index.rsh:32:39:application call to [unknown function] (defined at: ./index.rsh:32:39:function exp)'],
    msg: 'in',
    who: 'Users_getHoroscope'
    });
  const v252 = stdlib.addressEq(v247, v231);
  const v253 = v252 ? false : true;
  stdlib.assert(v253, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:33:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:32:39:application call to [unknown function] (defined at: ./index.rsh:32:39:function exp)', 'at ./index.rsh:32:39:application call to [unknown function] (defined at: ./index.rsh:32:39:function exp)'],
    msg: null,
    who: 'Users_getHoroscope'
    });
  
  const v262 = stdlib.mul(v232, stdlib.checkedBigNumberify('./index.rsh:35:25:decimal', stdlib.UInt_max, '1000000'));
  
  const txn1 = await (ctc.sendrecv({
    args: [v231, v232, v233, v237, v241, v249],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [v262, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v264], secs: v266, time: v265, didSend: v153, from: v263 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Users_getHoroscope"
        });
      const v272 = stdlib.mul(v232, stdlib.checkedBigNumberify('./index.rsh:35:25:decimal', stdlib.UInt_max, '1000000'));
      const v274 = stdlib.add(v241, v272);
      sim_r.txns.push({
        amt: v272,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v280 = true;
      const v281 = await txn1.getOutput('Users_getHoroscope', 'v280', ctc4, v280);
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v264], secs: v266, time: v265, didSend: v153, from: v263 } = txn1;
  undefined /* setApiDetails */;
  const v269 = stdlib.addressEq(v263, v231);
  const v270 = v269 ? false : true;
  stdlib.assert(v270, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:33:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:32:39:application call to [unknown function] (defined at: ./index.rsh:32:39:function exp)', 'at ./index.rsh:32:39:application call to [unknown function] (defined at: ./index.rsh:32:39:function exp)'],
    msg: null,
    who: 'Users_getHoroscope'
    });
  const v272 = stdlib.mul(v232, stdlib.checkedBigNumberify('./index.rsh:35:25:decimal', stdlib.UInt_max, '1000000'));
  const v274 = stdlib.add(v241, v272);
  ;
  const v280 = true;
  const v281 = await txn1.getOutput('Users_getHoroscope', 'v280', ctc4, v280);
  if (v153) {
    stdlib.protect(ctc5, await interact.out(v264, v281), {
      at: './index.rsh:32:13:application',
      fs: ['at ./index.rsh:32:13:application call to [unknown function] (defined at: ./index.rsh:32:13:function exp)', 'at ./index.rsh:36:18:application call to "resolve" (defined at: ./index.rsh:35:44:function exp)', 'at ./index.rsh:35:44:application call to [unknown function] (defined at: ./index.rsh:35:44:function exp)'],
      msg: 'out',
      who: 'Users_getHoroscope'
      });
    }
  else {
    }
  
  return;
  
  
  
  };
export async function Users_getHoroscope(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Users_getHoroscope expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Users_getHoroscope expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Users_getHoroscope3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Users_getHoroscope(byte[150])byte`],
    pure: [],
    sigs: [`Users_getHoroscope(byte[150])byte`]
    },
  appApproval: `BiAKAAEDCAIEICgwOCYCAQAAIjUAMRhBAf0pZEkiWzUBJVs1AjYaABdJQQAUIjUEIzUGgbnrzbYDEkQ2GgFCAGs2GgIXNQQ2GgM2GgEXSSEEDEAA5UkkDEAAUCQSRCEFNAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BTX+gARUv+cxNP5QsDT/MQASRDT/NAMhBls0AyEHWzQDIQhbIwgyBjQDIQlbQgDRSCQ0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8hBls1/iEHWzX9IQhbNfxJNQU1+4AE0SPhWDT7ULAxADT/E0Q0/oHAhD0LNfo0AyEJWzT6CDX5NPqIATGACQAAAAAAAAEYAbCAAQE1BzT/NP4WUDT9FlA0/BZQNPkWUChLAVcAQGdIIQU1ATIGNQJCAKkiEkSBoI0GiADxIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/JVs1/oAErNEfwzT/FlA0/hZQsDEANP80/iIyBiJCAAA1/zX+Nf01/DX7Nfo0/TT8DEEAJDT6NPsWUDT8FlA0/RZQNP8WUChLAVcAQGdIJDUBMgY1AkIAL7EisgE0/7III7IQNPqyB7NCAAAxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 64,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v232",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v233",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v232",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v233",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes22",
                        "name": "elem4",
                        "type": "bytes22"
                      }
                    ],
                    "internalType": "struct T7",
                    "name": "elem0",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T8",
                "name": "v264",
                "type": "tuple"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem4",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem5",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem6",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem7",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem8",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem9",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem10",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem11",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem12",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem13",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem14",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem15",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem16",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem17",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes24",
                    "name": "elem18",
                    "type": "bytes24"
                  }
                ],
                "internalType": "struct T11",
                "name": "v291",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v280",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          },
          {
            "internalType": "bytes22",
            "name": "elem4",
            "type": "bytes22"
          }
        ],
        "internalType": "struct T7",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "Users_getHoroscope",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes22",
                        "name": "elem4",
                        "type": "bytes22"
                      }
                    ],
                    "internalType": "struct T7",
                    "name": "elem0",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T8",
                "name": "v264",
                "type": "tuple"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem4",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem5",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem6",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem7",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem8",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem9",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem10",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem11",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem12",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem13",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem14",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem15",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem16",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem17",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes24",
                    "name": "elem18",
                    "type": "bytes24"
                  }
                ],
                "internalType": "struct T11",
                "name": "v291",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620013d6380380620013d68339810160408190526200002691620003c7565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16200008b34156007620000e0565b620000956200025d565b8051339052602080830180515183518301525181015182516040908101919091528183018051600090819052815143940193909352510152620000d8816200010a565b505062000464565b81620001065760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8051604001516020820151511015620001fd57620001596040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b031680825282516020908101518184019081528451604090810151818601908152838701805151606080890191825291518401516080808a019182526003600055436001558551978801989098529451938601939093529051908401525192820192909252905160a082015260c00160405160208183030381529060405260029080519060200190620001f8929190620002b0565b505050565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801562000241573d6000803e3d6000fd5b50600080805560018190556200025a906002906200033f565b50565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001620002ab60405180606001604052806000815260200160008152602001600081525090565b905290565b828054620002be9062000427565b90600052602060002090601f016020900481019282620002e257600085556200032d565b82601f10620002fd57805160ff19168380011785556200032d565b828001600101855582156200032d579182015b828111156200032d57825182559160200191906001019062000310565b506200033b92915062000379565b5090565b5080546200034d9062000427565b6000825580601f106200035e575050565b601f0160209004906000526020600020908101906200025a91905b5b808211156200033b57600081556001016200037a565b604080519081016001600160401b0381118282101715620003c157634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620003db57600080fd5b620003e562000390565b835181526040601f1983011215620003fc57600080fd5b6200040662000390565b60208581015182526040909501518582015293810193909352509092915050565b600181811c908216806200043c57607f821691505b602082108114156200045e57634e487b7160e01b600052602260045260246000fd5b50919050565b610f6280620004746000396000f3fe6080604052600436106100565760003560e01c80630bb029621461005f5780631e93b0f114610087578063358a2c28146100a657806383230757146100b9578063ab53f2c6146100ce578063d0eba5c0146100f157005b3661005d57005b005b61007261006d366004610a56565b610104565b60405190151581526020015b60405180910390f35b34801561009357600080fd5b506003545b60405190815260200161007e565b61005d6100b4366004610a79565b610137565b3480156100c557600080fd5b50600154610098565b3480156100da57600080fd5b506100e3610162565b60405161007e929190610a91565b61005d6100ff366004610aee565b6101ff565b600061010e6107a5565b602080820151518490526040805191820190526000815261012f8282610226565b519392505050565b60408051602081019091526000815261015e61015836849003840184610b01565b82610226565b5050565b60006060600054600280805461017790610b64565b80601f01602080910402602001604051908101604052809291908181526020018280546101a390610b64565b80156101f05780601f106101c5576101008083540402835291602001916101f0565b820191906000526020600020905b8154815290600101906020018083116101d357829003601f168201915b50505050509050915091509091565b60408051602081019091526000815261015e61022036849003840184610bb7565b826104c3565b610236600360005414600a61065d565b815161025190158061024a57508251600154145b600b61065d565b60008080556002805461026390610b64565b80601f016020809104026020016040519081016040528092919081815260200182805461028f90610b64565b80156102dc5780601f106102b1576101008083540402835291602001916102dc565b820191906000526020600020905b8154815290600101906020018083116102bf57829003601f168201915b50505050508060200190518101906102f49190610d50565b9050610313604051806040016040528060008152602001600081525090565b60408051338152855160208083019190915280870151515180518385015290810151606080840191909152818401516080808501919091529082015160a0840152015169ffffffffffffffffffff191660c082015290517f55f38686f4bd38178bb3056e1fe7248501be6d5d94e59b6517a66b4b681edd2c9181900360e00190a181516103ba906001600160a01b031633146103b05760016103b3565b60005b600861065d565b620f424082602001516103cd9190610d82565b80825260808301516103df9190610da1565b602082015280516103f3903414600961065d565b604051600181527fc335972f7fef60fbcd52f38b50e23776377dd6217b87e96501ad0efe33acc2b59060200160405180910390a160018084526040805160a081018252600080825260208083018281528385018381526060808601858152608087018681528b516001600160a01b031688528b8601519094528a88015190925289015190528682015190526004909155439093559051909161049791839101610db9565b604051602081830303815290604052600290805190602001906104bb9291906107c4565b505050505050565b6104d3600460005414600e61065d565b81516104ee9015806104e757508251600154145b600f61065d565b60008080556002805461050090610b64565b80601f016020809104026020016040519081016040528092919081815260200182805461052c90610b64565b80156105795780601f1061054e57610100808354040283529160200191610579565b820191906000526020600020905b81548152906001019060200180831161055c57829003601f168201915b50505050508060200190518101906105919190610d50565b90507f25d12bc1cbe18a10b79a8513e2f1cfc17f18fce42bf64ad90c343568c6020aed33846040516105c4929190610df7565b60405180910390a16105d83415600c61065d565b80516105f0906001600160a01b03163314600d61065d565b6105f8610848565b815181516001600160a01b039091169052602080830151825190910152604080830151825190910152606082015161063290600190610da1565b6020808301805192909252815143910152608083015190516040015261065781610682565b50505050565b8161015e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b8051604001516020820151511015610748576106cf6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b0316815281516020908101518183015282516040908101518184015281840180515160608501525181015160808401526003600055436001555161071f91839101610db9565b604051602081830303815290604052600290805190602001906107439291906107c4565b505050565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561078b573d6000803e3d6000fd5b50600080805560018190556107a290600290610895565b50565b6040518060400160405280600081526020016107bf6108cf565b905290565b8280546107d090610b64565b90600052602060002090601f0160209004810192826107f25760008555610838565b82601f1061080b57805160ff1916838001178555610838565b82800160010185558215610838579182015b8281111561083857825182559160200191906001019061081d565b5061084492915061090f565b5090565b6040805160a081018252600091810182815260608201839052608082019290925290819081526020016107bf60405180606001604052806000815260200160008152602001600081525090565b5080546108a190610b64565b6000825580601f106108b1575050565b601f0160209004906000526020600020908101906107a2919061090f565b60405180602001604052806107bf6040805160c081018252600060208201818152928201819052606082018190526080820181905260a082015290815290565b5b808211156108445760008155600101610910565b60405160a0810167ffffffffffffffff8111828210171561095557634e487b7160e01b600052604160045260246000fd5b60405290565b6040805190810167ffffffffffffffff8111828210171561095557634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff8111828210171561095557634e487b7160e01b600052604160045260246000fd5b604051610260810167ffffffffffffffff8111828210171561095557634e487b7160e01b600052604160045260246000fd5b600060a08284031215610a0157600080fd5b610a09610924565b905081358152602082013560208201526040820135604082015260608201356060820152608082013569ffffffffffffffffffff1981168114610a4b57600080fd5b608082015292915050565b600060a08284031215610a6857600080fd5b610a7283836109ef565b9392505050565b600060c08284031215610a8b57600080fd5b50919050565b82815260006020604081840152835180604085015260005b81811015610ac557858101830151858201606001528201610aa9565b81811115610ad7576000606083870101525b50601f01601f191692909201606001949350505050565b60006102808284031215610a8b57600080fd5b600081830360c0811215610b1457600080fd5b610b1c61095b565b8335815260a0601f1983011215610b3257600080fd5b610b3a61098c565b9150610b4461098c565b610b5186602087016109ef565b8152825260208101919091529392505050565b600181811c90821680610b7857607f821691505b60208210811415610a8b57634e487b7160e01b600052602260045260246000fd5b803567ffffffffffffffff1981168114610bb257600080fd5b919050565b6000818303610280811215610bcb57600080fd5b610bd361095b565b8335815261026080601f1984011215610beb57600080fd5b610bf361098c565b9250610bfd6109bd565b6020860135815260408601356020820152606086013560408201526080860135606082015260a0860135608082015260c086013560a082015260e086013560c08201526101008087013560e083015261012080880135828401526101409150818801358184015250610160808801358284015261018091508188013581840152506101a080880135828401526101c091508188013581840152506101e08088013582840152610200915081880135818401525061022080880135828401526102409150818801358184015250610cd4838801610b99565b9082015283525060208101919091529392505050565b600060a08284031215610cfc57600080fd5b610d04610924565b82519091506001600160a01b0381168114610d1e57600080fd5b808252506020820151602082015260408201516040820152606082015160608201526080820151608082015292915050565b600060a08284031215610d6257600080fd5b610a728383610cea565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610d9c57610d9c610d6c565b500290565b60008219821115610db457610db4610d6c565b500190565b81516001600160a01b031681526020808301519082015260408083015190820152606080830151908201526080918201519181019190915260a00190565b60006102a08201905060018060a01b038416825282516020830152602083015151805160408401526020810151606084015260408101516080840152606081015160a0840152608081015160c084015260a081015160e084015260c0810151610100818186015260e0830151915061012082818701528184015192506101409150828287015280840151925050610160828187015281840151925061018091508282870152808401519250506101a082818701528184015192506101c091508282870152808401519250506101e08281870152818401519250610200915082828701528084015192505061022082818701528184015192506102409150828287015280840151610260870152508083015192505050610f2461028084018267ffffffffffffffff19169052565b50939250505056fea2646970667358221220c0c835d5f03085514bbc76ea798a7ad5a208f932dc45eeaf98a21ccfd83dd90c64736f6c634300080c0033`,
  BytecodeLen: 5078,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:59:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:29:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:38:19:after expr stmt semicolon',
    fs: ['at ./index.rsh:35:44:application call to [unknown function] (defined at: ./index.rsh:35:44:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Oracle": Oracle,
  "UserView": UserView,
  "Users_getHoroscope": Users_getHoroscope
  };
export const _APIs = {
  Users: {
    getHoroscope: Users_getHoroscope
    }
  };
