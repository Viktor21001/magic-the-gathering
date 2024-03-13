const router = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');

const { User, Card } = require('../../db/models');

router.get('/:id', async (req, res) => {
   const { id } = req.params;
   const card = await Card.findByPk(id);
   renderTemplate(card, {}, res);
});

module.exports = router