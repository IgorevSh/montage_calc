export default function formatPrice(str: string): string {
  return str.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
