count(
for $rebut in doc("facturacio.xml")//rebut
where $rebut/linies/producte[@codi="11115"]
return $rebut
)