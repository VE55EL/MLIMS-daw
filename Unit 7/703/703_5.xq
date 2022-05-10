<ul>{
for $factura in doc("703")//factura
order by number($factura/total) descending
return <li>{$factura/total}</li>
}</ul>