for $book in collection("702")//book
where $book/@price = 19.95
return <book>{$book/title}</book> 