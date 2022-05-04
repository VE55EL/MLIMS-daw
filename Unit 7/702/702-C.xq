let $items := collection("702")//book/author
let $uno := distinct-values($items)
return <book>
<items>{
for $item in $uno
return<item>{$item}</item>
}
</items>
</book>