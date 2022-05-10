for $rebut in doc("703")//rebut
where $rebut/linies/producte/quantitat > 2
return $rebut/@numero
