1.

<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:template match="/">
    <museums>
            <xsl:apply-templates/>
    </museums>
</xsl:template>

<xsl:template match="museum">
    <museum>
        <name>
            <xsl:value-of select="@name"/>
        </name>
        <city>
            <xsl:value-of select="@city"/>
        </city>
        <country>
            <xsl:value-of select="@country"/>
        </country>
    </museum>

</xsl:template>

</xsl:stylesheet>

2.

<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:template match="/">
    <museums>
            <xsl:apply-templates/>
    </museums>
</xsl:template>

<xsl:template match="museum">
    <museum>
            <xsl:attribute name="location">
                <xsl:value-of select="@city"/>
                (<xsl:value-of select="@country"/>)
            </xsl:attribute>
            <xsl:value-of select="@name"/>
    </museum>

</xsl:template>

</xsl:stylesheet>

3.

<?xml version="1.0" encoding="UTF-8"?>
    <xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:template match="/">
      <cities>
        <xsl:apply-templates/>  
      </cities>
    </xsl:template>

    <xsl:template match="museum">
        <city>
            <xsl:attribute name="name">
                <xsl:value-of select="@city"/>
            </xsl:attribute>
            <country><xsl:value-of select="@country"/></country>
            <museum><xsl:value-of select="@name"/></museum>
        </city>
</xsl:template>

</xsl:stylesheet>

4.

<?xml version="1.0" encoding="UTF-8"?>
    <xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:template match="/">
      <countries>
        <xsl:apply-templates/>  
      </countries>
    </xsl:template>

    <xsl:template match="museum">
        <country>
            <xsl:attribute name="name">
                <xsl:value-of select="@country"/>
            </xsl:attribute>
            
            <city>
                <xsl:attribute name="name">
                <xsl:value-of select="@city"/>
                </xsl:attribute>
                
                <museum>
                    <xsl:attribute name="name">
                        <xsl:value-of select="@name"/>
                    </xsl:attribute>
                </museum>
            </city>
        </country>
</xsl:template>

</xsl:stylesheet>

5. 

<?xml version="1.0" encoding="UTF-8"?>
    <xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:template match="/">
      <places>
        <xsl:apply-templates/>  
      </places>
    </xsl:template>

    <xsl:template match="museum">
        <place>
            <xsl:attribute name="type">museum</xsl:attribute>
            
            <location>
                <xsl:attribute name="name">city</xsl:attribute>
                <xsl:value-of select="@city"/>
            </location>
            <location>
                <xsl:attribute name="name">country</xsl:attribute>
                <xsl:value-of select="@country"/>
            </location>
            <name>
                <xsl:value-of select="@name"/>
            </name>
        </place>
</xsl:template>

</xsl:stylesheet>  