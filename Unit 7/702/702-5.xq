for $book in collection("702")//book 
where $book/year > 2004 and  $book/title/@lang = "en"
return <book>{$book/title}</book>