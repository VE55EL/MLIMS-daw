for $book in collection("702")//book
where $book/year < 2000
return <book>{$book/title}</book> 