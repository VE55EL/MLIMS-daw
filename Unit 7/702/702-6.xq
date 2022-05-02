for $book in collection("702")//book order by $book/author
let $un := distinct-values($book/author)
return <book>{$un}</book>