const express = require('express');
const { finance } = require('faker');
const { chain, random } = require('lodash');

const router = express.Router();

router.get('/:userId', function(req, res, next) {
  const { userId } = req.params;

  res.json({
    amount: finance.amount(),
    currencyCode: finance.currencyCode(),
    currencyName: finance.currencyName(),
    userId
  });
});

router.get('/:userId/transactions', function(req, res, next) {
  const { userId } = req.params;

  const transactions = chain(random(2, 10))
    .range()
    .map(() => ({
      amount: finance.amount(),
      currencyCode: finance.currencyCode(),
      currencyName: finance.currencyName(),
      to: finance.iban(),
      transactionType: finance.transactionType()
    }))
    .value();

  res.json({
    account: finance.account(),
    transactions,
    userId
  });
});

module.exports = router;
