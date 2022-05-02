for $book in collection("702")//book order by $book/year
return <book>{$book/title}{$book/year}</book> 