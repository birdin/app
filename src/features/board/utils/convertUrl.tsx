// Transform string to valid URI
//
export default function convertUrl(url: string) {
  return url.replace(/ /g, '-').toLowerCase();
}