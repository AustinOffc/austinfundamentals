/**
 * Tag template untuk menulis contoh kode di dalam file data.
 * - Backslash ditulis apa adanya (seperti String.raw).
 * - Karakter ‵ diganti menjadi backtick (`)
 * - Karakter ¤ diganti menjadi tanda dolar ($)
 * Sehingga template literal JavaScript seperti ‵Halo ¤{nama}‵ bisa ditulis tanpa konflik.
 */
export function c(strings: TemplateStringsArray): string {
  return strings.raw.join('').replace(/‵/g, '`').replace(/¤/g, '$').replace(/^\n/, '');
}
