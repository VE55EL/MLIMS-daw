sum(
for $rebut in doc("703")//rebut
let $prod := $rebut/linies/producte[@codi="11112"]
return $prod/preuunitari * $prod/quantitat
)