rule unknown_threat {
	meta:
		Author: "Lautaro"
		Descrption: "This rules listen for connections targeting the suspicious port or domain"
	string:
		$domain = "darkl0rd"
		$malicious_port = "56565"
	condition:
		$domain or $malicious_port
} 