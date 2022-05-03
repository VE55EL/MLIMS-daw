for $book in collection("702")//book
let $total := count($book/author)
return <book>{$book/title}{$total}</book>