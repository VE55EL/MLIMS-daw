for $factura in collection("703")//factura
where $factura/total > 500
return $factura/client/raosocial/nom