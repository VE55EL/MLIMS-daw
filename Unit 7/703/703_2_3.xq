for $x in doc("703_2")//match
where $x/summary/team/@name
return concat($x//team[1]/@name," - ", $x//team[2]/@name)