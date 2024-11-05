async function SearchPage({
  searchParams,
}: {
  searchParams: {
    query: string;
  };
}) {
  const { query } =  searchParams;
  return <div>search page for {query}</div>;
}

export default SearchPage;
