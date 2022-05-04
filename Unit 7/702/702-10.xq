<html>
<body>
{
for $book in collection("702")//book/@category[.="web"]
return <h1>{$book/../title/text()}</h1>
}
{
let $books := collection("702")//book
let $total := sum($books/@category[.="web"]/../@price)
return<p>{$total}</p>
}
</body>
</html>