<p align="center">
  <a href="" rel="noopener">
 <img src="https://docs.reach.sh/assets/logo.png" alt="Project logo"></a>
</p>
<h3 align="center">Horoscope</h3>

<div align="center">


</div>

---

<p align="center"> Workshop : Horoscope
    <br> 
</p>

## Horoscope decentralized application 
This Dapp's smart contract was written in Reach language.

# Aim
The aim of this workshop is to provide a detailed explainantion on the logic we are trying to implement and how this logic was written in Reach. The two languages used to in this workshop
* `Reach` ----> This is the language the smart contract was written 
* `Javascript` ----> The language the testing file was written

# Logic
We are trying to create a Horoscope Dapp, In this dapp users or subscribers will pay a one time fee for subscription, after this fee is paid the users get nfts deposited into their wallets.Each user that has the nft receives daily horoscope based on their signs.

`index.rsh`
```js
1 'reach 0.1'
2 export const main = Reach.App(() => {
3    const Oracle = Participant('Oracle', {
4        Nftid: Token,
5        horoscope: Fun([Bytes(600), UInt], Bytes(600)),
6        notpay: Fun([Bool], Null),
7        seePayment: Fun([Bool], Null)
8    })
9    const Users = API('Users', {
10        getnft: Fun([UInt, Bool], Null),
11        getdetails: Fun([Bytes(600), UInt], Null),
12    })
13   init()
14   Oracle.only(() => {
15        const NftId = declassify(interact.Nftid)
16    })
17
18   Oracle.publish(NftId)
19 })
```
* On the first line we write write the version of reach we are using
* On line 2 we create the create the reach application 
* From line 3 to line 8 we define the Oracle participant were users subscribe to get their daily horoscope
* Line 9 to 12 we write the api functionalities and initalize the reach application on line 13
* We make our first publication, by publishing the nftid

```js
20 const [Userid, payamt, payed_check, addresses] =
21        parallelReduce([0, 0, Array.replicate(5, false), Array.replicate(5, Oracle)])
22            .invariant(balance(NftId) == 0 && balance() == payamt)
23            .while(Userid < 5)
24            .api(Users.getnft,
25                (p, c) => {
26                    check(p > 0)
27                    check(c != false)
28                },
29                (p, _) => p,
30                (p, c, k) => {
31                    k(null);
32                    const who = this
33                    return [Userid + 1, payamt + p, payed_check.set(Userid, c), addresses.set(Userid, who)];
34                })
35
36 const a = Bytes(600).pad('w')
37    const [userid, names, age_range] =
38        parallelReduce([0, Array.replicate(5, a), Array.replicate(5, 0)])
39            .invariant(balance(NftId) == 0 && balance() == payamt)
40            .while(userid < 5)
41            .api(Users.getdetails,
42                (n, d, k) => {
43                    k(null);
44                    return [userid + 1, names.set(userid, n), age_range.set(userid, d)];
45                })
```
* From line 20 to line 34 we write a code that enables users to connect to the contract and make payment.
* From line 36 to line 45 we write an api code that get the users information, such as name and DOB.

```js
46 var [id, list_address, name, age, paid] = [1, addresses, names, age_range, payed_check]
47    invariant(balance(NftId) == 0 && balance() == payamt)
48    while (id < 6) {
49        commit()
50        const [Ad1, Ad2, Ad3, Ad4, Ad5] = list_address
51        const [name1, name2, name3, name4, name5] = name
52        const [user1age_range, user2age_range, user3age_range, user4age_range, user5age_range] = age
53        const [check_u1, check_u2, check_u3, check_u4, check_u5] = paid
54
55        const payyy =
56            id == 1 ? check_u1 :
57                id == 2 ? check_u2 :
58                    id == 3 ? check_u3 :
59                        id == 4 ? check_u4 :
60                            check_u5
61        const range =
62            id == 1 ? user1age_range :
63                id == 2 ? user2age_range :
64                    id == 3 ? user3age_range :
65                        id == 4 ? user4age_range :
66                            user5age_range
67        const nam =
68            id == 1 ? name1 :
69                id == 2 ? name2 :
70                    id == 3 ? name3 :
71                        id == 4 ? name4 :
72                            name5
73        const addd =
74            id == 1 ? Ad1 :
75                id == 2 ? Ad2 :
76                    id == 3 ? Ad3 :
77                        id == 4 ? Ad4 :
78                            Ad5
79        Oracle.only(() => {
80            const checking_pay = declassify(interact.seePayment(payyy))
81        })
82        Oracle.publish(checking_pay)
83        if (checking_pay) {
84            commit()
85            Oracle.only(() => {
86                const send_horoscope = declassify(interact.horoscope(nam, range))
87            })
88            Oracle.publish(send_horoscope)
89                .pay([[1, NftId]])
90            transfer([[1, NftId]]).to(addd)
91
92        } else {
93            Oracle.only(() => {
94                const notpaid = declassify(interact.notpay(checking_pay))
95            })
96            Oracle.publish(notpaid)
97        }
98        [id, list_address, name, age, paid] = [id + 1, list_address, name, age, paid]
99        continue
100    }
101    transfer(balance()).to(Oracle)
102    commit()
```
* In this block of code we use a while loop to check for payments, distribute the nfts to users who have paid and also send their daily horoscope. All the funds paid to the smart contract is transfered to the oracle.

The code was broken into parts and numbered to aid proper explantion, full code below
```js
'reach 0.1'
export const main = Reach.App(() => {
    const Oracle = Participant('Oracle', {
        Nftid: Token,
        horoscope: Fun([Bytes(600), UInt], Bytes(600)),
        notpay: Fun([Bool], Null),
        seePayment: Fun([Bool], Null)
    })
    const Users = API('Users', {
        getnft: Fun([UInt, Bool], Null),
        getdetails: Fun([Bytes(600), UInt], Null),
    })
    init()
    Oracle.only(() => {
        const NftId = declassify(interact.Nftid)
    })

    Oracle.publish(NftId)
    const [Userid, payamt, payed_check, addresses] =
        parallelReduce([0, 0, Array.replicate(5, false), Array.replicate(5, Oracle)])
            .invariant(balance(NftId) == 0 && balance() == payamt)
            .while(Userid < 5)
            .api(Users.getnft,
                (p, c) => {
                    check(p > 0)
                    check(c != false)
                },
                (p, _) => p,
                (p, c, k) => {
                    k(null);
                    const who = this
                    return [Userid + 1, payamt + p, payed_check.set(Userid, c), addresses.set(Userid, who)];
                })
    const a = Bytes(600).pad('w')
    const [userid, names, age_range] =
        parallelReduce([0, Array.replicate(5, a), Array.replicate(5, 0)])
            .invariant(balance(NftId) == 0 && balance() == payamt)
            .while(userid < 5)
            .api(Users.getdetails,
                (n, d, k) => {
                    k(null);
                    return [userid + 1, names.set(userid, n), age_range.set(userid, d)];
                })
    var [id, list_address, name, age, paid] = [1, addresses, names, age_range, payed_check]
    invariant(balance(NftId) == 0 && balance() == payamt)
    while (id < 6) {
        commit()
        const [Ad1, Ad2, Ad3, Ad4, Ad5] = list_address
        const [name1, name2, name3, name4, name5] = name
        const [user1age_range, user2age_range, user3age_range, user4age_range, user5age_range] = age
        const [check_u1, check_u2, check_u3, check_u4, check_u5] = paid

        const payyy =
            id == 1 ? check_u1 :
                id == 2 ? check_u2 :
                    id == 3 ? check_u3 :
                        id == 4 ? check_u4 :
                            check_u5
        const range =
            id == 1 ? user1age_range :
                id == 2 ? user2age_range :
                    id == 3 ? user3age_range :
                        id == 4 ? user4age_range :
                            user5age_range
        const nam =
            id == 1 ? name1 :
                id == 2 ? name2 :
                    id == 3 ? name3 :
                        id == 4 ? name4 :
                            name5
        const addd =
            id == 1 ? Ad1 :
                id == 2 ? Ad2 :
                    id == 3 ? Ad3 :
                        id == 4 ? Ad4 :
                            Ad5
        Oracle.only(() => {
            const checking_pay = declassify(interact.seePayment(payyy))
        })
        Oracle.publish(checking_pay)
        if (checking_pay) {
            commit()
            Oracle.only(() => {
                const send_horoscope = declassify(interact.horoscope(nam, range))
            })
            Oracle.publish(send_horoscope)
                .pay([[1, NftId]])
            transfer([[1, NftId]]).to(addd)

        } else {
            Oracle.only(() => {
                const notpaid = declassify(interact.notpay(checking_pay))
            })
            Oracle.publish(notpaid)
        }
        [id, list_address, name, age, paid] = [id + 1, list_address, name, age, paid]
        continue
    }
    transfer(balance()).to(Oracle)
    commit()
})
```
`index.mjs` file
```js
import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib();
const startingBalance = stdlib.parseCurrency(1000);

const accOracle = await stdlib.newTestAccount(startingBalance);
const Users = await stdlib.newTestAccounts(10, startingBalance);
const theNFT = await stdlib.launchToken(accOracle, "NFT", "NFT01", { supply: 20 });
console.log('Hello Alice and Bobsssssss')
const ctcOracle = accOracle.contract(backend);
const db = {
    Aries: 'Today, you may be able to make a balance between your earnings and expenses, which may boost your bank balance. You may likely to perform better in your job. Your boss can give you new responsibilities in terms of promotions. You may get back your money which was stuck. You may be able to control over your opponents and hidden enemies.',
    Taurus: 'Today, you may expect some smart gains of your past investments. You may likely to achieve your goals with less effort, which may make you confident. You are advised to control your straightforwardness,it may likely to affect your terms with the people around you. ',
    Gemini: 'Today, you are advised to control expenditures over worthless stuffs, otherwise it may affect your saving. You are advised to avoid lending money. Anxiety may give you sleeplessness, so control your mind while taking some important decisions. You are advised to not go away from your responsibilities. You are advised to be practical today. You should avoid to take emotional decisions.',
    Cancer: 'Today, you may feel negative vibrations around you, which may make you unhappy, you are advised to avoid making investments on worthless assets. You may also notice that friends and people around you may not be supportive today. You are advised to not to expect more from anyone in terms of help, otherwise it may make you nervous. It is advised to take independent decisions today.',
    Leo: 'Today, you may not able to present yourself logically. You may have a dull feeling, which may give you lack of confidence. So need to follow your intuition while taking decisions in terms of investment. People around you, may not be cooperative in terms of routine work. You are advised to be careful in eating unhealthy food to avoid stomach issues.',
    Virgo: 'Today, you are likely to be more excited due to cooperation of your family and friends. You may plan to renovate your house or may bring some souvenir stuff to maintain your standard, which may increase your social status. You may expect increase of your fixed assets.',
    Libra: 'Today, you are in good mood since morning, which may make you romantic? You are advised to do some exercise to overcome from your back pain. You may make some fruitful plans, which may be helpful in near future in terms of profession. You may likely to hear good news from your kids. Students may do better. Love birds can take some important decision in terms of marriage.',
    Scorpio: 'Today, you may likely to meet some old friends or be busy in social get together. You may be more exited today. New innovations may be there in terms of business. Also may likely to have some unexpected material gains. Kids may give good news in terms of studies. Love birds may enjoy their quality moments.',
    Sagittarius: 'Today, your investments may give you profits, which may enhance your savings. You may likely to get good profits in small investments. On domestic front, your family may support you to maintain harmony. You may also in the winning position from opponents and hidden enemies. You may likely to get promotions or may have job change, which may likely to increase professional stability.',
    Capricorn: 'Today, you may expect some instant gains in your business, which may boost your confidence level as well as bank balance. Advised to avoid stress in domestic life. There would be some momentum at business and work front. Your prestige may be increased. You may also plan for an overseas trip.',
    Aquarius: 'Today, students may expect positive results in their studies after in depth research. Singles may expect to find soul match. There may be good understanding between you and your spouse, which will reflect into your domestic life. Spiritually you may have some direction in terms of knowledge. In business, may make some new plans to overcome workflow issues.',
    Pisces: 'Today, things would not be favourable. You may feel dull and unhappy. Some mysterious fear may make you upset. You may likely to be attracted by occult. You may feel lack of confidence, which may affect your work. it is avoid to rush driving and risky adventure tours.',
}
const pic = [
    '02/19', '02/20', '02/21', '02/22',
    '02/23', '02/24', '02/25', '02/26',
    '02/27', '02/28', '03/1', '03/2',
    '03/3', '03/4', '03/5', '03/6',
    '03/7', '03/8', '03/9', '03/10',
    '03/11', '03/12', '03/13', '03/14',
    '03/15', '03/16', '03/17', '03/18',
    '03/19', '03/20'
]
const Aqui = [
    '01/20', '01/21', '01/22', '01/23',
    '01/24', '01/25', '01/26', '01/27',
    '01/28', '01/29', '01/30', '01/31',
    '02/1', '02/2', '02/3', '02/4',
    '02/5', '02/6', '02/7', '02/8',
    '02/9', '02/10', '02/11', '02/12',
    '02/13', '02/14', '02/15', '02/16',
    '02/17', '02/18'
]
const Capri = [
    '12/22', '12/23', '12/24', '12/25',
    '12/26', '12/27', '12/28', '12/29',
    '12/30', '12/31', '01/1', '01/2',
    '01/3', '01/4', '01/5', '01/6',
    '01/7', '01/8', '01/9', '01/10',
    '01/11', '01/12', '01/13', '01/14',
    '01/15', '01/16', '01/17', '01/18',
    '01/19'
]
const sagitt = [
    '11/22', '11/23', '11/24', '11/25',
    '11/26', '11/27', '11/28', '11/29',
    '11/30', '12/1', '12/2', '12/3',
    '12/4', '12/5', '12/6', '12/7',
    '12/8', '12/9', '12/10', '12/11',
    '12/12', '12/13', '12/14', '12/15',
    '12/16', '12/17', '12/18', '12/19',
    '12/20', '12/21'
]
const Scorp = [
    '10/23', '10/24', '10/25', '10/26',
    '10/27', '10/28', '10/29', '10/30',
    '10/31', '11/1', '11/2', '11/3',
    '11/4', '11/5', '11/6', '11/7',
    '11/8', '11/9', '11/10', '11/11',
    '11/12', '11/13', '11/14', '11/15',
    '11/16', '11/17', '11/18', '11/19',
    '11/20', '11/21'
]
const libr = [
    '09/23', '09/24', '09/25', '09/26',
    '09/27', '09/28', '09/29', '09/30',
    '09/31', '10/1', '10/2', '10/3',
    '10/4', '10/5', '10/6', '10/7',
    '10/8', '10/9', '10/10', '10/11',
    '10/12', '10/13', '10/14', '10/15',
    '10/16', '10/17', '10/18', '10/19',
    '10/20', '10/21', '10/22'
]
const Virg = [
    '08/23', '08/24', '08/25', '08/26',
    '08/27', '08/28', '08/29', '08/30',
    '08/31', '09/1', '09/2', '09/3',
    '09/4', '09/5', '09/6', '09/7',
    '09/8', '09/9', '09/10', '09/11',
    '09/12', '09/13', '09/14', '09/15',
    '09/16', '09/17', '09/18', '09/19',
    '09/20', '09/21', '09/22'
]
const le = [
    '07/23', '07/24', '07/25', '07/26',
    '07/27', '07/28', '07/29', '07/30',
    '07/31', '08/1', '08/2', '08/3',
    '08/4', '08/5', '08/6', '08/7',
    '08/8', '08/9', '08/10', '08/11',
    '08/12', '08/13', '08/14', '08/15',
    '08/16', '08/17', '08/18', '08/19',
    '08/20', '08/21', '08/22'
]
const canc = [
    '06/21', '06/22', '06/23', '06/24',
    '06/25', '06/26', '06/27', '06/28',
    '06/29', '06/30', '07/1', '07/2',
    '07/3', '07/4', '07/5', '07/6',
    '07/7', '07/8', '07/9', '07/10',
    '07/11', '07/12', '07/13', '07/14',
    '07/15', '07/16', '07/17', '07/18',
    '07/19', '07/20', '07/21', '07/22'
]
const gemi = [
    '05/21', '05/22', '05/23', '05/24',
    '05/25', '05/26', '05/27', '05/28',
    '05/29', '05/30', '05/31', '06/1',
    '06/2', '06/3', '06/4', '06/5',
    '06/6', '06/7', '06/8', '06/9',
    '06/10', '06/11', '06/12', '06/13',
    '06/14', '06/15', '06/16', '06/17',
    '06/18', '06/19', '06/20'
]
const tars = [
    '04/20', '04/21', '04/22', '04/23',
    '04/24', '04/25', '04/26', '04/27',
    '04/28', '04/29', '04/30', '05/1',
    '05/2', '05/3', '05/4', '05/5',
    '05/6', '05/7', '05/8', '05/9',
    '05/10', '05/11', '05/12', '05/13',
    '05/14', '05/15', '05/16', '05/17',
    '05/18', '05/19', '05/20'
]
const aris = [
    '03/21', '03/22', '03/23', '03/24',
    '03/25', '03/26', '03/27', '03/28',
    '03/29', '03/30', '03/31', '04/1',
    '04/2', '04/3', '04/4', '04/5',
    '04/6', '04/7', '04/8', '04/9',
    '04/10', '04/11', '04/12', '04/13',
    '04/14', '04/15', '04/16', '04/17',
    '04/18', '04/19'
]
const showBalance = async (acc, name) => {
    const amt = await stdlib.balanceOf(acc);
    const amtNFT = await stdlib.balanceOf(acc, theNFT.id);
    console.log(`${name} has ${stdlib.formatCurrency(amt)} ${stdlib.standardUnit} and ${amtNFT} of the NFT`);
};

const get_nft = async (accs, p, c) => {//payamount and true or false if paid
    try {
        const who = accs
        const acc = who.getAddress()
        const ctc = who.contract(backend, ctcOracle.getInfo());
        const r = stdlib.parseCurrency(p);
        who.tokenAccept(theNFT.id)
        await ctc.apis.Users.getnft(r, c);
    } catch (error) {
        console.log(error)
    }

}

const getdetails = async (accs, n, br) => { //name of user and birthday
    try {
        const who = accs
        const acc = who.getAddress()
        const ctc = who.contract(backend, ctcOracle.getInfo());
        const num_mark =
            pic.includes(br) ? 1 :
                Aqui.includes(br) ? 2 :
                    Capri.includes(br) ? 3 :
                        sagitt.includes(br) ? 4 :
                            Scorp.includes(br) ? 5 :
                                libr.includes(br) ? 6 :
                                    Virg.includes(br) ? 7 :
                                        le.includes(br) ? 8 :
                                            canc.includes(br) ? 9 :
                                                gemi.includes(br) ? 10 :
                                                    tars.includes(br) ? 11 :
                                                        aris.includes(br) ? 12 :
                                                            0
        await ctc.apis.Users.getdetails(n, num_mark);
    } catch (error) {
        console.log(error)
    }

}

await Promise.all([
    ctcOracle.p.Oracle({
        Nftid: theNFT.id,
        horoscope: async (name, num) => {
            if (num == 1) {
                const word = db.Pisces
                console.log(`${name} ${word}`)
                return word
            } else {
                if (num == 2) {
                    const word = db.Aquarius
                    console.log(`${name} ${word}`)
                    return word
                } else {
                    if (num == 3) {
                        const word = db.Capricorn
                        console.log(`${name} ${word}`)
                        return word
                    } else {
                        if (num == 4) {
                            const word = db.Sagittarius
                            console.log(`${name} ${word}`)
                            return word
                        } else {
                            if (num == 5) {
                                const word = db.Scorpio
                                console.log(`${name} ${word}`)
                                return word
                            } else {
                                if (num == 6) {
                                    const word = db.Libra
                                    console.log(`${name} ${word}`)
                                    return word
                                } else {
                                    if (num == 7) {
                                        const word = db.Virgo
                                        console.log(`${name} ${word}`)
                                        return word
                                    } else {
                                        if (num == 8) {
                                            const word = db.Leo
                                            console.log(`${name} ${word}`)
                                            return word
                                        } else {
                                            if (num == 9) {
                                                const word = db.Cancer
                                                console.log(`${name} ${word}`)
                                                return word
                                            } else {
                                                if (num == 10) {
                                                    const word = db.Gemini
                                                    console.log(`${name} ${word}`)
                                                    return word
                                                } else {
                                                    if (num == 11) {
                                                        const word = db.Taurus
                                                        console.log(`${name} ${word}`)
                                                        return word
                                                    } else {
                                                        if (num == 12) {
                                                            const word = db.Aries
                                                            console.log(`${name} ${word}`)
                                                            return word
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        notpay: async (som) => {
            console.log(`User not pay`)
        },
        seePayment: async (som) => {
            console.log(`Checking payment status`)
        }


    }),
    await get_nft(Users[0], 50, true),
    await get_nft(Users[1], 50, true),
    await get_nft(Users[2], 50, true),
    await get_nft(Users[3], 50, true),
    await get_nft(Users[4], 50, true),
    await getdetails(Users[0], 'steve', '02/19'),
    await getdetails(Users[1], 'jerry', '08/23'),
    await getdetails(Users[2], 'Alice', '06/20'),
    await getdetails(Users[3], 'Bob', '11/22'),
    await getdetails(Users[4], 'ferry', '04/19'),
]);

await showBalance(Users[0], 'steve')
await showBalance(Users[1], 'jerry')
await showBalance(Users[2], 'Alice')
await showBalance(Users[3], 'Bob')
await showBalance(Users[4], 'ferry')

process.exit()
```
