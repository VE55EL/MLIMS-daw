sum(
for $match in doc("703_2")//match
let $points := $match/summary/team/@name[.="France"]/../scorecard/name/@points
return sum($points)
)