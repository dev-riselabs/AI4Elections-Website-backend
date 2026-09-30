Add-Type -AssemblyName System.Drawing

function Make-Logo($path, $text, $subtext, $r, $g, $b, $ar, $ag, $ab) {
    $bmp = New-Object System.Drawing.Bitmap(320, 96)
    $gfx = [System.Drawing.Graphics]::FromImage($bmp)
    $gfx.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $gfx.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
    $gfx.Clear([System.Drawing.Color]::Transparent)
    
    $accentColor = [System.Drawing.Color]::FromArgb($ar, $ag, $ab)
    $accentBrush = New-Object System.Drawing.SolidBrush($accentColor)
    $gfx.FillEllipse($accentBrush, 12, 28, 40, 40)
    
    $innerBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $gfx.FillEllipse($innerBrush, 22, 38, 20, 20)
    
    $fontMain = New-Object System.Drawing.Font('Arial', 22, [System.Drawing.FontStyle]::Bold)
    $textColor = [System.Drawing.Color]::FromArgb($r, $g, $b)
    $brushMain = New-Object System.Drawing.SolidBrush($textColor)
    $gfx.DrawString($text, $fontMain, $brushMain, 65, 18)
    
    if ($subtext -ne '') {
        $fontSub = New-Object System.Drawing.Font('Arial', 9, [System.Drawing.FontStyle]::Bold)
        $brushSub = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(140, 150, 160))
        $gfx.DrawString($subtext, $fontSub, $brushSub, 68, 54)
    }
    
    $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
    $gfx.Dispose()
    $bmp.Dispose()
}

Make-Logo 'public/rise-networks-logo.png' 'RISE' 'NETWORKS' 15 30 60 241 131 56
Make-Logo 'public/rise-networks-white.png' 'RISE' 'NETWORKS' 255 255 255 241 131 56
Make-Logo 'public/tda-logo.png' 'TDA' 'TECH DEV AFRICA' 30 41 59 14 167 89
Make-Logo 'public/ncc-logo.png' 'NCC' 'COMMUNICATIONS COMM' 30 41 59 37 99 235

Write-Host "Logos generated successfully"
