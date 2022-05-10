for $equip in distinct-values( doc("703_2")//team/@name)
let $punts := doc("6nations11.xml")//team[@name=$equip]
order by sum($punts/@score) descending
return <team equip="{$equip}" anotacions="{sum($punts/@score)}" />