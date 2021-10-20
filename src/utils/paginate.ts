export default function paginate(array: unknown[], pageSize: number, pageNumber: number) {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}
