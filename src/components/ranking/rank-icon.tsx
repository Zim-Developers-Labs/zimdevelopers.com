export function RankIcon({ id, ...props }: any) {
  const viewBox = id === 'executive' ? '0 0 40 30' : '0 0 869 875';
  return (
    <svg {...props} fill="none" viewBox={viewBox}>
      <use href={`/sprite.svg#${id}`} />
    </svg>
  );
}
