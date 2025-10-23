	$('#FindTextInput').on('input', function() {
		ClearAll();
		FindText($(this).val());
	});

function FindText(textToFind) {
	if (!textToFind.trim()) return;

	const escapedText = textToFind.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

	$('*').filter(function() {
		return $(this).children().length === 0 && $(this).text().trim().length > 0;
	}).each(function() {
		const text = $(this).text();
		const regex = new RegExp(`(${escapedText})`, 'gi');
		const highlighted = text.replace(regex, '<mark>$1</mark>');
		if (highlighted !== text) {
			$(this).html(highlighted);
		}
	});
}

	function ClearAll()
	{
		$('mark').each(function() {
			$(this).replaceWith($(this).text());
		});
	}