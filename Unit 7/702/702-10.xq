<html>
<body>
{
for $book in collection("702")//book/@category[.="web"]

return <title>{$book/../title/text()}</title>
}
{
let $books := collection("702")//book
let $total := sum($books/@category[.="web"]/../@price)
return<total>{$total}</total>
}
</body>
</html>