export const removeHtml = (html: string) => {
  return html.replace(/<[^>]*>/g, '');
};
