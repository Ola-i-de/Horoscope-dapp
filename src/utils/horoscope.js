const signs = [
  'Aries',
  'Taurus',
  'Gemini',
  'Cancer',
  'Leo',
  'Virgo',
  'Libra',
  'Scorpio',
  'Sagittarius',
  'Capricorn',
  'Aquarius',
  'Pisces'
]

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

export function fetchHoroscope(date){
  console.log('date', date)
  var sign = Number(new Intl.DateTimeFormat('fr-TN-u-ca-persian', {month: 'numeric'}).format(date)) - 1;
  const signName =  signs[sign]
  return {
    horoscope: db[signName],
    sign: signName
  }
}


// var sign = Number(new Intl.DateTimeFormat('fr-TN-u-ca-persian', {month: 'numeric'}).format(Date.now())) - 1;

// console.log(signs[sign]);