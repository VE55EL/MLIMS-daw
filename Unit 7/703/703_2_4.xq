for $x in doc("703_2")//match
where number($x//team[1]/@name[.="Italy"]/../@score) > number($x//team[2]/@score) or number($x//team[1]/@score) < number($x//team[2]/@name[.="Italy"]/../@score)
return concat($x/@num,": ",$x/@data)