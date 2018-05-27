export const mapSocialInfo = (social) => {
  let foundIndex = -1;

  const newSocial = social.map((el, index) => {
    if (el.label === 'web') {
      foundIndex = index;
      return Object.assign(el, { icon: 'globe' });
    }
    return Object.assign(el, { icon: el.label });
  });

  if (foundIndex !== -1) {
    const [web] = newSocial.splice(foundIndex, 1);
    web.icon = 'globe';
    newSocial.unshift(web);
  }

  return newSocial;
};

export const mapUserInfo = (info) => (
  Object.assign({}, info, { social: mapSocialInfo(info.social) })
);

