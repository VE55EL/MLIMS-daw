<html>
<style>
  table {{
    border :solid black 1px;
    border-collapse: collapse;
  }}
  th {{
    border :solid black 1px;
    text-align: center;
  }}
  td {{
    border :solid black 1px;
  }}
  td.title {{
    text-align: left;
  }}
  td.price {{
    text-align: right;
  }}
</style>
<body>
<header>Book List</header>
<table>
<tr>
<th>Title</th>
<th>Author</th>
<th>Price</th>
</tr>
{
for $book in collection("702")//book
return
<tr>
<td class="title">{data($book/title)}</td>
<td >{data($book/author)}</td>
<td class="precio">{data($book/@price)}</td>
</tr>}
</table>
</body>
</html>