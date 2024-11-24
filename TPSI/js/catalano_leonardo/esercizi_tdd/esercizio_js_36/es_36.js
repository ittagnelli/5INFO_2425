export const tronca_parola = (s, pos) => {
    const parole = s.split(" ");
  let lim;
  
  if (pos >= 0) {
    lim = pos;
  } else {
    lim = parole.length + pos;
  }

  return parole.slice(0, lim).join(" ");
};

