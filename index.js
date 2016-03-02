const repl = require('repl'),
  history = require('repl.history'),
  R = require('ramda'),
  F = require('ramda-fantasy'),

const Ewe = () => {
  const bleat = repl.start({
    prompt: 'λ ',
    replMode: repl.REPL_MODE_STRICT
  });
  history(bleat, process.env.HOME + '/.ramda_history');
  bleat.context.R = R;
  R.map((r) => bleat.context[r] = R[r], R.keys(R));
  bleat.context.F = F;
  R.map((f) => bleat.context[f] = F[f], R.keys(F));
}

module.exports = Ewe;
