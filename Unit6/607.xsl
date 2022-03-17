<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:output method="text" indent="yes"/>
<xsl:strip-space elements="*" />
    
    <xsl:template match="/">
Marks from // Markup Languages //
--------------------------------
        <xsl:text>&#10;</xsl:text>
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="student">   
        <xsl:value-of select="name"/><xsl:text>&#32;</xsl:text>
        <xsl:value-of select="lastname"/>:<xsl:text>&#32;</xsl:text>
        <xsl:value-of select="credits/credit[name='Markup languages']/mark"/><xsl:text>&#10;</xsl:text>
    </xsl:template>

</xsl:stylesheet>  